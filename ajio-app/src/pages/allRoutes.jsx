import { Route, Routes } from "react-router-dom"
import { Products } from "./product"



export const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/'element={<Products/>}/>
            <Route path='/*'element={<h3>Page Not Found</h3>}/>
        </Routes>
    )
}