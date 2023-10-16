
import React from 'react'
import axios from 'axios';

function Countries() {
    var [countries,setCountries] = React.useState([]);
    var [isLoading,setIsLoading]=React.useState(true)
    React.useEffect(()=>{
        axios.get("https://restcountries.com/v3/all")
        .then(function(res){
            console.log(res.data)
            setCountries([...res.data])
            setIsLoading(false)
        })
    },[])
    return (
        <div className='mybox'>
            <h1>Countries</h1>
            {
                isLoading && (
                    <img style={{width:'200px'}} src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" alt="" />
                )
            }
            {
                countries.map((c)=>{
                    return <li>{c.name.common}</li>
                })
            }
        </div>
    )

}

export default Countries