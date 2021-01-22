import React,{useEffect, useState} from 'react';
import axios from 'axios';
import data from '../data';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../actions/productActions';


export default function HomeScreen(){
  const dispatch=useDispatch();
   const productList=useSelector(state=>state.productList);
   const {loading,error,products} = productList;

  // hooks manage the state of react components
  //use Effect accept two parameters first parameter is funtion and second is array
  useEffect(()=>{//ye function hai send ajox request ajax request is a syns funtion
        
        
         dispatch(listProduct());
       
        //yahan hum data ko define kerah bus call nahi kerah hun
     
  },[]);//After component running this function will run componentdidmount

    return (
        <div>
        {loading ? (
         <LoadingBox></LoadingBox>
        ):
        error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ):
        ( <div className="row center">
        {
          products.map(product =>(
            <Product key={product._id} product={product}></Product>
          ))
        };
        </div>
         ) }
       
        </div>
    )
}
