import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import CourseBox from "./components/home/CourseBox";


function Home() {
  return (
    <>
      {/* <Header />
      <div>your name: {name}</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        mollitia perspiciatis illo tenetur esse molestiae rerum inventore
        consectetur praesentium, voluptas, ab quos. Nam consequatur nesciunt,
        repellat saepe corrupti quos nobis!
      </p>
      <Footer /> */}
      <h2>course list:</h2>
      <CourseBox title="course number one" details="hello world" time="100h"/>
      <CourseBox title="course number two" details="hello react" time="80h"/>
      <CourseBox title="course number three" details="hello next" time="150h"/>
    </>
  );
}
export default Home;
