import s1 from "../assets/image/sale-image.jpg"

function Saleimage(){
    return(
        <div class="sale-image">
            <img src={s1} alt="saleimage" ></img>
            <div class="offercard">
                <h2>Udemy Flash Sale! 24 hours to Save.</h2>
                <p>Get the top Courses for just 499. Just one day to save but lifetime to learn</p>
            </div>
        </div>
    )
}

export default Saleimage