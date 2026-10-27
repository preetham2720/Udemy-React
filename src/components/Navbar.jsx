function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar__s1">
                <h1>Udemy</h1>
            </div>

            <div className="navbar__s2">
                <i className="fa-solid fa-magnifying-glass" style={{"color": "rgb(0, 0, 0)"}}></i>
                <input type="text" placeholder="Search for anything here Tech, Business, Art ..."></input>
            </div>

            <div className="navbar__s3">
                <p>Courses</p>
                <div className="mylearning">
                    <p>My Learning</p>
                    <div className="mylearning__card">
                        <p>You Did Purchase Any Thing!!!</p> 
                    </div>
                </div>
                
                <i className="fa-sharp fa-solid fa-cart-shopping" style={{"color": "rgb(0, 0, 0)"}}></i>
                <i className="fa-sharp fa-solid fa-bell" style={{"color": "rgb(0, 0, 0)"}}></i>
                <i className="fa-solid fa-user" style={{"color": "rgb(0, 0, 0)"}}></i>
            </div>

            <div className="navbar__s4">
                <i className="fa-solid fa-bars" style={{"color": "rgb(0, 0, 0)"}}></i>
            </div>

        </div>
    )
}

export default Navbar