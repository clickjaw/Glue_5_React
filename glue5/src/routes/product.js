import { useParams } from "react-router-dom";
import React from 'react';
import Footer from "./Footer"


export default function Product(){
    let params = useParams();

  return (
    <>
    <h2>Product {params.productId} </h2>
    <Footer 
    productId = {params.productId}/>
    </>
  );
}

