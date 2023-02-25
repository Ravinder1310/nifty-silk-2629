import { Link } from "react-router-dom"
import "../prodStyles/mens.css"


export const MensCard = ({men}) => {
    return (
        <div className="mens_cards">
            {/* <Link to={`/book/${book.id}`}> */}
            <img src={men.images} alt='Error' width={"100%"}/>
            {/* </Link> */}
            <h3>{men.brand}</h3>
            <p>{men.nameCls}</p>
            <div>
            <p className="price">₹{men.price}</p>
            <p className="original_price">₹{men.orginal_price}</p>
            <p className="mens_discount">({men.discount}% off)</p>
            </div>
            <p className="offer_price">Offer price ₹{men.price-80}</p>
            {/* <Link to={`/book/${book.id}/edit`}>
            <button>Edit</button>
            </Link> */}
        </div>
    )
}