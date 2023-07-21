import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const ProductList = (props) => {
   
    const {removeFromDom ,product, setProduct} = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/'+productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/product")
    	.then((res)=>{
	    console.log(res.data);
            setProduct(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	});
    }, []);
    
    return (
         <div>
            {
                product.map((product, index)=>{
                return (
                    <div key={index}>
                        <p>{product.title} : {product.price} $</p>
                        <Link to={`/product/${product._id}`}>Details</Link>
                        <Link to={'/product/edit/'+ product._id} >Edit</Link>
                        <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                    </div> 
                )})
            }
        </div>
    );
}
export default ProductList;