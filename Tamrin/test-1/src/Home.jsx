import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import CourseBox from "./components/home/CourseBox";
import CourseList from "./components/home/CourseList";

function Home() {
  return (
    <>
      <CourseList>
        <CourseBox title="course number one" details="hello world" time="100h" />
      <CourseBox title="course number two" time="80h" />
      <CourseBox title="course number three" details="hello next" time="150h" />
      </CourseList>
    </>
  );
}
export default Home;
