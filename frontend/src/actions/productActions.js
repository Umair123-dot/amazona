import Axios from "axios";
import { PRODUCT_DETAILS_REQUEST, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../contants/constantProduct"

export const listProduct = ()=> async (dispatch) =>{

    dispatch({
       type: PRODUCT_LIST_REQUEST

    });
    try{
        const {data}= await Axios.get('/api/products');
        dispatch({type:PRODUCT_LIST_SUCCESS,payload:data});
    }catch(error){
        dispatch({type:PRODUCT_LIST_FAIL,payload:error.message})

    }
}

// export const detailsProducts = (productId) => async(dispatch)=>{
//     dispatch ({type:PRODUCT_DETAILS_REQUEST,payload:productId});
// }