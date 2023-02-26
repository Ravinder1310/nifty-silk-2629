import { Link } from "react-router-dom"
import "../prodStyles/mens.css"


export const WomensCard = ({women}) => {
    return (
        <div className="mens_cards">
            {/* <Link to={`/book/${book.id}`}> */}
            <img src={women.images} alt='Error' width={"100%"}/>
            {/* </Link> */}
            <h3>{women.brand}</h3>
            <p>{women.nameCls}</p>
            <div>
            <p className="price">₹{women.price}</p>
            <p className="original_price">₹{women.orginal_price}</p>
            <p className="mens_discount">({women.discount}% off)</p>
            </div>
            <p className="offer_price">Offer price ₹{women.price-80}</p>
            {/* <Link to={`/book/${book.id}/edit`}>
            <button>Edit</button>
            </Link> */}
        </div>
    )
}