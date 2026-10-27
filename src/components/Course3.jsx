import c3 from "../assets/image/c3.jpg"

function Course3(){
    return(
         <div className="courses_card">
           <img src={c3}></img>
            <h3>Web Development Bootcamp 2023</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐ ⭐ ⭐ ⭐</p>
            <p>449 <del>1999</del></p>
        </div>
    )
}

export default Course3