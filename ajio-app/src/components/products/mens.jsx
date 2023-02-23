import { MensCard } from './mensSingle'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from "react"
import { getProducts } from "../../redux/action"
import { useLocation, useSearchParams } from "react-router-dom"

export const MensList = () => {
  const dispatch = useDispatch()
  const mens = useSelector((store)=>store.productReducer.mens);
  const location = useLocation();
  const [searchParams] = useSearchParams();

// console.log(location)
  useEffect(()=>{
    let paramObj = {
        params: {
            category:searchParams.getAll("category"), //&category=Novel&category=Motivational
            _sort: searchParams.get("order") && "release_year",// &category=Novel&category=Motivational&_sort=release_year
            _order: searchParams.get("order")//  &category=Novel&category=Motivational&_sort=release_year&_order=asc
        }
    } 
    dispatch(getProducts(paramObj))
  },[location.search])

    return (
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'20px',}}>
            {mens.length>0 && mens.map((el) => {
                return <MensCard key={el.id} men={el}/>
            })}
        </div>
    )
}