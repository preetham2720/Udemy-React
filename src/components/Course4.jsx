import c4 from "../assets/image/c4.jpg"

function Course4(){
    return(
         <div className="courses_card">
           <img src={c4}></img>
            <h3>Web Development Bootcamp 2023</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐ ⭐ ⭐ ⭐</p>
            <p>449 <del>1999</del></p>
        </div>
    )
}

export default Course4