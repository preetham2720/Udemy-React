import Course1 from "./Course1"
import Course2 from "./Course2"
import Course3 from "./Course3"
import Course4 from "./Course4"

function Popularcards(){
    return(
        <div className="popular_container">
            <Course1></Course1>
            <Course2></Course2>
            <Course3></Course3>
            <Course4></Course4>
            <Course1></Course1>
            <Course2></Course2>
            <Course3></Course3>
            <Course4></Course4>
        </div>
    )
}

export default Popularcards