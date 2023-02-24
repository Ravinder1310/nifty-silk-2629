import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes"
import axios from "axios"


const getProductsRequestAction = () => {
    return {type:GET_PRODUCT_REQUEST};
}
const getProductsSuccessAction = (payload) => {
    return {type:GET_PRODUCT_SUCCESS,payload};
}
const getProductsFailureAction = () => {
    return {type:GET_PRODUCT_FAILURE};
}

export const getProducts =(params={}) => (dispatch) => {
    dispatch(getProductsRequestAction());

    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/mens`,params).then((res)=>{
        dispatch(getProductsSuccessAction(res.data))
    }).catch((error)=>{
        dispatch(getProductsFailureAction(error))
    })
}