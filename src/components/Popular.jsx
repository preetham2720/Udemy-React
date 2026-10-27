import Popularcards from "./Popularcards"

function Popular(){
    return(
        <div className="popular">
            <div className="popular__title">
                <h2>Most Popular</h2>
                <p>Pick the best fit</p>
            </div>
            <Popularcards></Popularcards>
        </div>
    )
}

export default Popular