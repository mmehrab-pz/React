function CourseBox({title : ti , details = "default" , time}){

    
    return(
        <div>
            <h2>{ti}</h2>
            <p>{details}</p>
            <span>time : {time}</span>
        </div>
    )
}

export default CourseBox