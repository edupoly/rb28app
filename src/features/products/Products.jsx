import React from 'react'
import { useDeleteProductByIdMutation, useGetAllProductsQuery, useLazyGetAllProductsQuery } from '../../services/products'

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
            {
                !isLoading && data.map((product)=>{
                    return  <li>
                                {product.title}
                                <button onClick={()=>{deleteProd(product.id)}}>Delete</button>
                            </li>
                })
            }
        </div>
    )
}

export default Products