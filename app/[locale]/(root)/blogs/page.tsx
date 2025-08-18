import BlogCard from "@/components/cards/blog-card";
import TopBar from "@/components/shared/top-bar";
import { getBlogs } from "@/service/blog.service";

const Page = async () => {
  // Fetch blogs from the service
  const blogs = await getBlogs();
  return (
    <div className="container mx-auto mt-20 max-w-6xl py-12">
      <TopBar label="Blog.title" description="Blog.description" />

      <div className="mt-20 grid grid-cols-2 gap-x-4 gap-y-24 max-md:grid-cols-1 max-md:p-2">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} isVertical />
        ))}
      </div>
    </div>
  );
};

export default Page;
