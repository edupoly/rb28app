import React from 'react'
import { useGetAllCountriesQuery } from '../../services/countries'

function Countries() {
    var {isLoading,data}=useGetAllCountriesQuery();
  return (
    <div className='mybox'>
        <h3>Countries</h3>
        {isLoading && <img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1260.gif" width="100px"/>}
        <ul>
        {
            !isLoading && (
                data.map((country,i)=>{
                    return <li>{country.name.common}</li>
                })
            )
        }
        </ul>
    </div>
  )
}

export default Countries