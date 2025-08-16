import Categories from "./_components/categories";
import FeaturedCourses from "./_components/featured-courses";
import Hero from "./_components/hero";

const HomePage = async () => {
  return (
    <>
      <Hero />
      <div className="px-3">
        <FeaturedCourses />
        <Categories />
      </div>
    </>
  );
};

export default HomePage;
