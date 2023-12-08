import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';
import { useAddProductMutation, useLazyGetAllProductsQuery } from '../../services/products'
function AddProduct() {
    var [addProdFn]=useAddProductMutation();
    var [lazyGetAllProds] = useLazyGetAllProductsQuery();
    var navigate=useNavigate()
    var prodForm = useFormik({
        initialValues:{
            "title": "",
            "price": 0,
            "description": "",
            "category": "",
            "image": "",
            "rating": {
                "rate": 0,
                "count": 0
            }
        },
        onSubmit:(values)=>{
            addProdFn(values)
            .then((res)=>{
                console.log(res);
                alert('Product added success')
                lazyGetAllProds();
                navigate("/products")
            })
            .catch((err)=>{
                console.log("err",err)
            })
        }
    })
  return (
    <div className='mybox'>
        <h1>AddProduct</h1>
        <form onSubmit={prodForm.handleSubmit}>
            <input type="text" name="title" onChange={prodForm.handleChange} placeholder='Title'/><br></br>
            <input type="text" name="price" onChange={prodForm.handleChange} placeholder='Price'/><br></br>
            <input type="text" name="description" onChange={prodForm.handleChange} placeholder='Description'/><br></br>
            <input type="text" name="category" onChange={prodForm.handleChange} placeholder='Category'/><br></br>
            <input type="text" name="image" onChange={prodForm.handleChange} placeholder='Image'/><br></br>
            <button>Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct