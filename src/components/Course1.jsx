import c1 from "../assets/image/c1.jpg"

function Course1(){
    return(
         <div className="courses_card">
            <img src={c1}></img>
            <h3>2023 Python Data Visaulisation Masterclass</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐ ⭐ ⭐ ⭐</p>
            <p>449 <del>1999</del></p>
        </div>
    )
}

export default Course1