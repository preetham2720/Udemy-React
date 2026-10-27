import Courses from "./Courses"

function Recommended(){
    return(
        <div className="recommended">
        <div className="recommended__title">
            <h2>Recommended for you</h2>
            <p>Pick the best fit</p>
        </div>
        <Courses></Courses>
    </div>
    )
}

export default Recommended