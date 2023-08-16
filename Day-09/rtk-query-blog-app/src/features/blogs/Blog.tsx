import { useState, useEffect, useRef } from "react";
import { IBlog } from "../../types";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import { useUpdateBlogMutation, useDeleteBlogMutation } from "../api/apiSlice";

const Blog = ({ blog }: { blog: IBlog }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(blog.title);
  const [content, setContent] = useState<string>(blog.content);

  const [updateBlog] = useUpdateBlogMutation();
  const [deleteBlog] = useDeleteBlogMutation();

  const blogRef = useRef<HTMLDivElement>(null);
  const isFirstClickRef = useRef<boolean>(true);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        blogRef.current &&
        !blogRef.current.contains(target) &&
        !isFirstClickRef.current
      ) {
        setEditMode(false);
      }
      isFirstClickRef.current = false;
    };

    const handleDocumentClick = (e: MouseEvent) => {
      handleClickOutside(e);
    };

    if (editMode) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
      isFirstClickRef.current = true;
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [editMode]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateBlog({ id: blog.id, title, content });
    setEditMode(false);
    isFirstClickRef.current = true;
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this blog?"))
      deleteBlog(blog.id);
  }

  return (
    <div className="bg-white shadow-md rounded-md p-4 blog" ref={blogRef}>
      {editMode ? (
        <form
          onSubmit={handleSubmit}
          className="p-4 bg-gray-100 flex flex-col gap-2"
        >
          <h2>Edit Blog</h2>
          <input
            type="text"
            className="border-b-2 p-1 rounded border-gray-300 outline-none w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="border-b-2 p-1 rounded border-gray-300 outline-none w-full h-32"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex items-center justify-center gap-8">
            <button className="px-4 py-1 rounded font-bold bg-green-300" type="submit">Save</button>
            <button className="px-4 py-1 rounded font-bold bg-red-300"
              type="button"
              onClick={() => {
                setEditMode(false);
                isFirstClickRef.current = true;
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <div className="flex items-center gap-4">
              <PencilIcon
                className="w-5 h-5 text-green-500 cursor-pointer"
                onClick={() => setEditMode(true)}
              />
              <TrashIcon 
                className="w-5 h-5 text-red-500 cursor-pointer" 
                onClick={handleDelete}
              />
            </div>
          </div>
          <p className="text-gray-500">{blog.content}</p>
        </>
      )}
    </div>
  );
};

export default Blog;
