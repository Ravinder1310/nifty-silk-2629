// import { MensCard } from './mensSingle'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from "react"
import { getKidsProducts} from "../../redux/action"
import { useLocation, useSearchParams } from "react-router-dom"
import "../prodStyles/mens.css"
import { KidsCard } from './kidsSingle'

export const KidsList = () => {
  const dispatch = useDispatch()
  const kids = useSelector((store)=>store.productReducer.kids);
  const location = useLocation();
  const [grid,setGrid] = useState(3)
  const [searchParams] = useSearchParams();

  const handleGrid = (val) => {
       setGrid(val);
  }

// console.log(location)
  useEffect(()=>{
    let paramObj = {
        params: {
            category:searchParams.getAll("category"), //&category=Novel&category=Motivational
            _sort: searchParams.get("order") && "release_year",// &category=Novel&category=Motivational&_sort=release_year
            _order: searchParams.get("order")//  &category=Novel&category=Motivational&_sort=release_year&_order=asc
        }
    } 
    dispatch(getKidsProducts(paramObj))
  },[location.search])

    return (
          <div>
            <div className="mens_sort">
              <div className='mens_grid'>
                <h1>GRID</h1>
                 <div className='grid_cards' onClick={()=>handleGrid("3")}>
                    <div></div>
                    <div></div>
                    <div></div>
                 </div>
                 <div className='grid_cards' onClick={()=>handleGrid("5")}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                 </div>
              </div>  
              <div className='sort_by'>
                <h1>SORT BY</h1>
              <select name="order" id="order" style={{border:"1px solid black",padding:"5px 5px"}}>
              {/* <option value="">Select by price</option>   */}
                <option value="hello">Price(Lowest first)</option>  
                <option value="">Discount</option>  
                <option value="">Price(Highest first)</option>
                <option value="">What's New</option>  
              </select>  
              </div> 
              </div>
              <div className='mens_container' style={{gridTemplateColumns:`repeat(${grid},1fr)`,width:"100%"}}>
            {kids.length>0 && kids.map((el) => {
                return <KidsCard key={el.id} kid={el}/>
            })}
            </div>
        </div>
    )
}