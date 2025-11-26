function CourseBox(props){
    console.log(props);
    
    return(
        <div>
            <h2>{props?.title}</h2>
            <p>{props?.details}</p>
            <span>time : {props?.time}</span>
        </div>
    )
}

export default CourseBox