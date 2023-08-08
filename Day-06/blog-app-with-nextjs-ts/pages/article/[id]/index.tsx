import { useState } from "react";
import { ArticleProps, Article } from "@/types";
import Link from "next/link";
import { server } from "@/config";
import createStyles from "@/styles/Create.module.css";
import axios from "axios";
import Popup from "@/components/Popup";
import { useRouter } from "next/router";

const article: React.FC<ArticleProps> = ({ article }) => {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(article.title);
  const [body, setBody] = useState(article.body);
  const [popup, setPopup] = useState(false);
  const [popupType, setPopupType] = useState("success");
  const [popupMessage, setPopupMessage] = useState("");
  const id = article.id;
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    const article = { title, body, excerpt: body.substring(0, 50) + "..." };
    try {
      await axios.put(`${server}/api/edit/${id}`, article);
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

  const handleDelete = async () => {
    try {
      if (!confirm("Are you sure you want to create this article?")) {
        return;
      }
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
              update
            </button>
            <button type="button" onClick={() => setEdit(false)}>
              Cancel
            </button>
          </form>
        </>
      ) : (
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

export const getStaticProps = async (context: any) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();
  return {
    props: { article },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  const ids = articles.map((article: Article) => article.id);
  const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export default article;
