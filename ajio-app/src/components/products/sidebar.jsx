import { useEffect } from "react";
import { useState } from "react"
import { useSearchParams } from "react-router-dom";


export const Sidebar = (e) => {

    const [searchParams,setSearchParams] = useSearchParams();
    const initialCategory = searchParams.getAll("category") // ['Novel','Motivational']
    const initialOrder = searchParams.get("order")
    const [category,setCategory] = useState(initialCategory || []);// ['Novel','Motivational']
    const [order,setOrder] = useState(initialOrder || "") // 'asc'
    
    const handleFilter = (e) => {
       let newCategory = [...category]; // ['Novel','Motivational']

       if(newCategory.includes(e.target.value)){
         newCategory.splice(newCategory.indexOf(e.target.value),1)
       }else{
        newCategory.push(e.target.value);
       }
       setCategory(newCategory); 
       console.log(searchParams);   
       
    }

    const handleSort = (e) => {
      setOrder(e.target.value);
    }
    // console.log(category);
    useEffect(() => {
        const params = {
            category,
        };
        order && (params.order=order)
        setSearchParams(params)
    },[category,order])

    return (
  
  <div  style={{width:'250px',border:'1px solid blue'}}>
        <div>
            <h3>Filter by:</h3>
            <div>
                <input type='checkbox' value='t-shirt' onChange={handleFilter} checked={category.includes("t-shirt")}/>
                <label>T-Shirts</label>
            </div>
            <div>
                <input type='checkbox' value='shirt' onChange={handleFilter} checked={category.includes("shirt")}/>
                <label>Shirts</label>
            </div>
            <div>
                <input type='checkbox' value='jeans' onChange={handleFilter} checked={category.includes("jeans")}/>
                <label>Jeans</label>
            </div>
            <div>
                <input type='checkbox' value='pants' onChange={handleFilter} checked={category.includes("pants")}/>
                <label>Track-Pants</label>
            </div>
            <div>
                <input type='checkbox' value='hoodie' onChange={handleFilter} checked={category.includes("hoodie")}/>
                <label>Hoddies</label>
            </div>
        </div>
            <div>
                <h3>Sort with order</h3>
                <div onChange={handleSort}>
                    <input type="radio" name="sort_by" value={'asc'} defaultChecked={order === "asc"}/>
                    <label>Ascending</label>
                    <input type="radio" name="sort_by" value={'desc'} defaultChecked={order === "desc"}/>
                    <label>Descending</label>
                </div>
            </div>
        </div>
    )
}



