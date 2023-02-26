// import { MensCard } from './mensSingle'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from "react"
import { getWomensProducts } from "../../redux/action"
import { useLocation, useSearchParams } from "react-router-dom"
import "../prodStyles/mens.css"
import { WomensCard } from './womensSingle'

export const WomenList = () => {
  const dispatch = useDispatch()
  const womens = useSelector((store)=>store.productReducer.womens);
  const location = useLocation();
  const [grid,setGrid] = useState(3)
  const [searchParams] = useSearchParams();

  const handleGrid = (val) => {
       setGrid(val);
  }

  // console.log(womens);

// console.log(location)
  useEffect(()=>{
    let paramObj = {
        params: {
            category:searchParams.getAll("category"), //&category=Novel&category=Motivational
            _sort: searchParams.get("order") && "release_year",// &category=Novel&category=Motivational&_sort=release_year
            _order: searchParams.get("order")//  &category=Novel&category=Motivational&_sort=release_year&_order=asc
        }
    } 
    dispatch(getWomensProducts(paramObj))
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
              {womens.length>0 && womens.map((el) => {
                return <WomensCard key={el.id} women={el}/>
            })}
            </div>
        </div>
    )
}