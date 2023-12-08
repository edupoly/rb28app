import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store'
import { Provider } from 'react-redux'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import Products from './features/products/Products';
import Countries from './features/countries/Countries';
import AddProduct from './features/products/AddProduct';
import ProductDetails from './features/products/ProductDetails';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path: "/products",
            element: <Products></Products>,
            children:[
                {
                    path:"/products/productDetails/:id",
                    element:<ProductDetails></ProductDetails>
                }
                
            ]
        },
        {
            path:"/countries",
            element:<Countries></Countries>
        },
        {
            path:"/addProduct",
            element:<AddProduct></AddProduct>
        }
      ]
    },
    
  ]);
  
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
