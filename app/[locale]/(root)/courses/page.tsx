import TopBar from "@/components/shared/top-bar";

import AllCourses from "./_components/all-courses";

const CoursesPage = () => {
  return (
    <div className="container mx-auto mt-20 max-w-6xl px-6 py-12">
      <TopBar
        label="NavbarLink.navLink2"
        description="CourseList.allCourseDescription"
      />

      <AllCourses />
    </div>
  );
};

export default CoursesPage;
