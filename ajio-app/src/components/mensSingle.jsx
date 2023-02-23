import { Link } from "react-router-dom"


export const MensCard = ({men}) => {
    return (
        <div style={{border:'1px solid red',padding:'20px'}}>
            {/* <Link to={`/book/${book.id}`}> */}
            <img src={men.images} alt='Error' width={150}/>
            {/* </Link> */}
            <h3>{men.brand}</h3>
            <p>{men.nameCls}</p>
            <p>{men.price}</p>
            <p>{men.discount}</p>
            {/* <Link to={`/book/${book.id}/edit`}>
            <button>Edit</button>
            </Link> */}
        </div>
    )
}