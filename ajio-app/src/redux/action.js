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

export const getMensProducts =(params={}) => (dispatch) => {
    dispatch(getProductsRequestAction());
    // const type = "mens";

    axios.get(`https://odd-deer-hoodie.cyclic.app/mens`,params).then((res)=>{
        dispatch(getProductsSuccessAction(res.data))
    }).catch((error)=>{
        dispatch(getProductsFailureAction(error))
    })
}

export const getWomensProducts =(params={}) => (dispatch) => {
    dispatch(getProductsRequestAction());
    // const type = "mens";

    axios.get(`https://odd-deer-hoodie.cyclic.app/womens`,params).then((res)=>{
        dispatch(getProductsSuccessAction(res.data))
    }).catch((error)=>{
        dispatch(getProductsFailureAction(error))
    })
}

export const getKidsProducts =(params={}) => (dispatch) => {
    dispatch(getProductsRequestAction());
    // const type = "mens";

    axios.get(`https://odd-deer-hoodie.cyclic.app/kids`,params).then((res)=>{
        dispatch(getProductsSuccessAction(res.data))
    }).catch((error)=>{
        dispatch(getProductsFailureAction(error))
    })
}