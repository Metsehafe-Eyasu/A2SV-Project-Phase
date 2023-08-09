import React, { useState } from "react"; // Importing React and useState from 'react'
import createStyles from "../styles/Create.module.css"; // Importing CSS module for styling
import axios from "axios"; // Importing axios for making HTTP requests
import { useRouter } from "next/router"; // Importing useRouter from Next.js for routing
import Popup from "@/components/Popup"; // Importing the Popup component
import { server } from "@/config"; // Importing server configuration

/**
 * create Component - Allows users to create new articles.
 * Uses state to manage form inputs and popup status.
 * @returns {JSX.Element} - The rendered create component.
 */
const create = () => {
  const [title, setTitle] = useState(""); // State for article title
  const [body, setBody] = useState(""); // State for article body
  const [popup, setPopup] = useState(false); // State for popup visibility
  const [popupType, setPopupType] = useState("success"); // State for popup type
  const [popupMessage, setPopupMessage] = useState(""); // State for popup message
  const router = useRouter(); // Initializing router from Next.js

  /**
   * Handles form submission.
   * Posts new article data to the server using axios.
   * Manages popup display based on success or error.
   * Clears form inputs after submission.
   * @param {React.FormEvent<HTMLFormElement>} e - Form submission event.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const article = { title, body, excerpt: body.substring(0, 50) + '...' };
    try {
      await axios.post(`${server}/api/create`, article);
      setPopupType("success");
      setPopupMessage("Article created successfully");
      setPopup(true);
      setTimeout(() => {
        setPopup(false);
        router.push("/");
      }, 2000);
    } catch (error) {
      setPopupType("error");
      setPopupMessage("Error creating article");
      setPopup(true);
      setTimeout(() => {
        setPopup(false);
      });
    }
    setTitle("");
    setBody("");
  };

  return (
    <>
      {popup && <Popup message={popupMessage} type={popupType} />}
      <h1>Create Your Own Blog</h1>
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
          Submit
        </button>
      </form>
    </>
  );
};

export default create; // Exporting the 'create' component as the default export
