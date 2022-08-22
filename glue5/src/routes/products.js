import React, { Component } from 'react'
import productData from "../data.json";
import { Link, Outlet } from "react-router-dom";

export default class products extends Component {
  render() {
    return (
      <div style = {{display: "grid", justifyContent: "inline", padding: "10px"}}>
        
        {productData.map(product => {
            return(
            <Link to = {`/products/${product.id}`} key={product.id}>{product.Name}</Link>
            )
        })}
        <Outlet/>
      </div>
    )
  }
}
