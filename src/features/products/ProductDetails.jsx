import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductDetailsByIdQuery } from '../../services/products';
function ProductDetails() {
    var x = useParams();
    var {isLoading,data} = useGetProductDetailsByIdQuery(x.id)
    console.log(x)
  return (
    <div className='mybox'>
        <h1>ProductDetails of {x.id}</h1>

        {
            <>
                <h3>{!isLoading && data.title}</h3>
                <img src={data.image} width="200px" alt="" />
            </>
        }

    </div>
  )
}

export default ProductDetails