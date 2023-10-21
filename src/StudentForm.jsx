import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
function StudentForm() {
    var stuForm=useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            dob:''
        },
        validationSchema:Yup.object({
            firstname: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('please abba fill chey..'),
            lastname: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
            dob: Yup.date("Please enter a valid data....."),
          }),
        onSubmit:(values)=>{
            alert(JSON.stringify(values))
        }
    })
  return (
    <div className='mybox'>
        <h1>StudentForm</h1>
        <form onSubmit={stuForm.handleSubmit}>
            <input type="text" name="firstname" onBlur={stuForm.handleBlur} onChange={stuForm.handleChange} placeholder='Enter your firstname'/>
            <div>
                {stuForm.touched.firstname && stuForm.errors.firstname}
            </div>
            <br />
            <input type="text" name="lastname" onBlur={stuForm.handleBlur} onChange={stuForm.handleChange} placeholder='Enter your lastname'/>
            <div>
                {stuForm.touched.lastname && stuForm.errors.lastname}
            </div>
            <br />
            <input type="date" name="dob" onBlur={stuForm.handleBlur} onChange={stuForm.handleChange} placeholder='Enter your Date of Birth'/>
            <div>
                {stuForm.touched.dob && stuForm.errors.dob}
            </div>
            <br />
            <button>lets begin the show...</button>
        </form>
        <button onClick={()=>{console.log(stuForm.touched)}}>lets see what is in stuForm</button>
    </div>
  )
}

export default StudentForm