import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"


export const PrivateRoute = ({children}) => {
    const location = useLocation();
    // console.log(location);
    const isAuth = useSelector((store)=>store.authReducer.isAuth)
   if(!isAuth){
    return <Navigate to={'/login'} state={location.pathname} replace/>
   }
   return children
}