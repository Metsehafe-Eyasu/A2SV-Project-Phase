import NewBlog from "./features/blogs/NewBlog";
import BlogList from "./features/blogs/BlogList";

const App = () => {
  return (
    <div className="flex flex-col p-8 gap-4">
      <h1 className="text-2xl font-bold">Blogs</h1>
      <div className="flex gap-4">
        <div>
          <NewBlog />
        </div>
        <BlogList />
      </div>
    </div>
  );
};

export default App;
