import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import CourseBox from "./components/home/CourseBox";
import CourseList from "./components/home/CourseList";
import { useState } from "react";


function Home() {
  let [count , setCount] = useState(0)

const counter = () =>{
  
  setCount(count+1)

}

  return (
    <>
    <Header />  
      <button onClick={counter}>click me</button>
      <p>{count}</p>
    <Footer />  

    </>
  );
}
export default Home;
