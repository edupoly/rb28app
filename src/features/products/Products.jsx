import React from 'react'
import { useDeleteProductByIdMutation, useGetAllProductsQuery, useLazyGetAllProductsQuery } from '../../services/products'
import { Link, Outlet } from 'react-router-dom';

function Products() {
    var {isLoading,data,...k}=useGetAllProductsQuery();
    var [lazyGetAllProdsFn]=useLazyGetAllProductsQuery();
    var [dfn]=useDeleteProductByIdMutation();
    function deleteProd(id){
        dfn(id)
        .then((res)=>{
            alert("Product deleted")
            lazyGetAllProdsFn();
        })
        .catch((err)=>{console.log("Err",err)})
    }
    return (
        <div className='mybox'>
            <h1>Products</h1>
            {isLoading && <img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1260.gif" width="100px"/>}
            <div style={{display:'flex',flexWrap:'wrap'}}>
                <ul style={{width:"45%"}}>
                {
                    !isLoading && data.map((product)=>{
                        return  <li>
                                    <Link to={`/products/productDetails/${product.id}`}>{product.title}</Link>
                                    <button onClick={()=>{deleteProd(product.id)}}>Delete</button>
                                </li>
                    })
                }
                </ul>
                <div style={{width:"45%"}}>
                    <Outlet></Outlet>
                </div>
            </div>
            
        </div>
    )
}

export default Products