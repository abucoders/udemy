import Categories from "./_components/categories";
import FeaturedCourses from "./_components/featured-courses";
import Hero from "./_components/hero";
import Instructor from "./_components/instructor";
import LearningJourney from "./_components/learning-journey";

const HomePage = async () => {
  return (
    <>
      <Hero />
      <div className="px-3">
        <FeaturedCourses />
        <Categories />
        <Instructor />
        <LearningJourney />
      </div>
    </>
  );
};

export default HomePage;
