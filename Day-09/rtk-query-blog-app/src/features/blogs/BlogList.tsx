import { IBlog } from "../../types";
import { useGetBlogsQuery } from "../api/apiSlice";
import Blog from "./Blog";

const BlogList: React.FC = () => {
  const {
    data: blogs,
    isLoading,
    isError,
    error,
  } = useGetBlogsQuery()

  return (
    <div className="flex flex-col gap-2">
      {isError && <div>{error.message}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs &&
        blogs.map((blog : IBlog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
    </div>
  );
};

export default BlogList;
