import { Link } from "react-router-dom"
import "../prodStyles/mens.css"
import axios from "axios"


export const MensCard = ({men}) => {

  const handleCart = async() => {
    await axios.post("https://odd-deer-hoodie.cyclic.app/cart",men)
  }

    return (
        <div className="mens_cards">
            <Link to={`/mens/${men._id}`}>
            <img src={men.images} alt='Error' width={"100%"}/>
            </Link>
            <h3>{men.brand}</h3>
            <p>{men.nameCls}</p>
            <div>
            <p className="price">₹{men.price}</p>
            <p className="original_price">₹{men.orginal_price}</p>
            <p className="mens_discount">({men.discount}% off)</p>
            </div>
            <p className="offer_price">Offer price ₹{men.price-80}</p>
            <button onClick={()=>handleCart} style={{backgroundColor:"black",color:"white",padding:"10px 10px",marginTop:"10px",borderRadius:"10px"}}>Add to bag</button>
        </div>
    )
}