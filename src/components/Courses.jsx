import Course1 from "./Course1"
import Course2 from "./Course2"
import Course3 from "./Course3"
import Course4 from "./Course4"

function Courses(){
    return(
        <div className="courses_container">
            <Course1></Course1>
            <Course2></Course2>
            <Course3></Course3>
            <Course4></Course4>
        </div>
    )
}

export default Courses