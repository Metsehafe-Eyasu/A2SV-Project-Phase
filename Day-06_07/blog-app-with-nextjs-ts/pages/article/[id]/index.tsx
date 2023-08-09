import { useState } from "react"; // Importing useState hook from 'react'
import { ArticleProps, Article } from "@/types"; // Importing custom types
import Link from "next/link"; // Importing the Link component from Next.js for routing
import { server } from "@/config"; // Importing server configuration
import createStyles from "@/styles/Create.module.css"; // Importing CSS module for styling
import axios from "axios"; // Importing axios for making HTTP requests
import Popup from "@/components/Popup"; // Importing the Popup component
import { useRouter } from "next/router"; // Importing useRouter from Next.js for routing

/**
 * Article Component - Renders an article's details and handles editing and deletion.
 * @param {ArticleProps} article - The article object as props.
 * @returns {JSX.Element} - The rendered Article component.
 */
const article: React.FC<ArticleProps> = ({ article }) => {
  const [edit, setEdit] = useState(false); // State for edit mode
  const [title, setTitle] = useState(article.title); // State for article title
  const [body, setBody] = useState(article.body); // State for article body
  const [popup, setPopup] = useState(false); // State for popup visibility
  const [popupType, setPopupType] = useState("success"); // State for popup type
  const [popupMessage, setPopupMessage] = useState(""); // State for popup message
  const id = article.id; // Extracting article ID from props
  const router = useRouter(); // Initializing router from Next.js

  /**
   * Handles form submission to update an article.
   * Validates input, sends PUT request, and manages popups.
   * @param {React.FormEvent<HTMLFormElement>} e - Form submission event.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validating input before submitting
    if (!title || !body) {
      setPopupType("error");
      setPopupMessage("Please fill in all fields");
      setPopup(true);
      setTimeout(() => {
        setPopup(false);
      }, 2000);
      return;
    }
    if (!confirm("Are you sure you want to update this article?")) {
      return;
    }
    // Preparing updated article data
    const updatedArticle = { title, body, excerpt: body.substring(0, 50) + "..." };
    try {
      // Sending PUT request to update article
      await axios.put(`${server}/api/edit/${id}`, updatedArticle);
      setEdit(false);
      setPopupType("success");
      setPopupMessage("Article updated successfully");
      setPopup(true);
      setTimeout(() => {
        setPopup(false);
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
      setPopupType("error");
      setPopupMessage("Error updating article");
      setPopup(true);
      setTimeout(() => {
        setPopup(false);
      }, 2000);
    }
  };

  /**
   * Handles article deletion.
   * Sends DELETE request and manages popups.
   */
  const handleDelete = async () => {
    try {
      if (!confirm("Are you sure you want to delete this article?")) {
        return;
      }
      // Sending DELETE request to delete article
      await axios.delete(`${server}/api/delete/${id}`);
      setPopupType("success");
      setPopupMessage("Article deleted successfully");
      setPopup(true);
      setTimeout(() => {
        setPopup(false);
        router.push("/");
      }, 2000);
    } catch (error) {
      console.log(error);
      setPopupType("error");
      setPopupMessage("Error deleting article");
      setPopup(true);
      setTimeout(() => {
        setPopup(false);
      }, 2000);
    }
  };

  return (
    <div className={createStyles.container}>
      {popup && <Popup message={popupMessage} type={popupType} />}
      {edit ? (
        // Render the edit form when in edit mode
        <>
          <form className={createStyles.form} onSubmit={handleSubmit}>
            <div className={createStyles.form_control}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={createStyles.form_control}>
              <label htmlFor="body">Body</label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                name="body"
                id="body"
                cols={30}
                rows={10}
              ></textarea>
            </div>
            <button type="submit" className={createStyles.form_button}>
              Update
            </button>
            <button type="button" onClick={() => setEdit(false)}>
              Cancel
            </button>
          </form>
        </>
      ) : (
        // Render article details and edit/delete buttons when not in edit mode
        <>
          <h1>{article.title}</h1>
          <p>{article.body}</p>
          <div className={createStyles.buttons}>
            <button
              className={createStyles.edit_button}
              onClick={() => setEdit(true)}
            >
              Edit
            </button>
            <button
              className={createStyles.delete_button}
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </>
      )}
      <br />
      <Link href="/">Go Back</Link>
    </div>
  );
};

/**
 * getServerSideProps Function - Fetches article data on the server side.
 * @param {Object} context - The context object containing route parameters.
 * @returns {Object} - The props object containing fetched article data.
 */
export const getServerSideProps = async (context: any) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();
  return {
    props: { article },
  };
};

export default article; // Exporting the Article component as the default export
