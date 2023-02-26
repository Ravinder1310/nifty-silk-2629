import { Link } from "react-router-dom"
import "../prodStyles/mens.css"


export const KidsCard = ({kid}) => {
    return (
        <div className="mens_cards">
            {/* <Link to={`/book/${book.id}`}> */}
            <img src={kid.images} alt='Error' width={"100%"}/>
            {/* </Link> */}
            <h3>{kid.brand}</h3>
            <p>{kid.nameCls}</p>
            <div>
            <p className="price">₹{kid.price}</p>
            <p className="original_price">₹{kid.orginal_price}</p>
            <p className="mens_discount">({kid.discount}% off)</p>
            </div>
            <p className="offer_price">Offer price ₹{kid.price-80}</p>
            {/* <Link to={`/book/${book.id}/edit`}>
            <button>Edit</button>
            </Link> */}
        </div>
    )
}