import React, { useState } from "react";
import createStyles from "../styles/Create.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Popup from "@/components/Popup";
import { server } from "@/config";

const create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [popup, setPopup] = useState(false);
  const [popupType, setPopupType] = useState("success");
  const [popupMessage, setPopupMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const article = { title, body, excerpt: body.substring(0, 50) + '...'};
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
      {popup && (
        <Popup message={popupMessage} type={popupType} />
      )}
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

export default create;
