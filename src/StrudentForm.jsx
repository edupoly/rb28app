import React from 'react'

function StrudentForm() {
    var [newStudent,setNewStudent] = React.useState({
        firstname:'',
        lastname:'',
        dob:'',
        gender:'',
        technologies:[]
    });
    var [allStudents,setAllStudents] = React.useState([]);
    function addStu(){
        setAllStudents([...allStudents,{...newStudent}])
    }
    function handleFirstname(e){
        setNewStudent({...newStudent,firstname:e.target.value,})
    }
    function handleLastname(e){
        setNewStudent({...newStudent,lastname:e.target.value,})
    }
    function handleDOB(e){
        setNewStudent({...newStudent,dob:e.target.value})
    }
    function handleGender(e){
        setNewStudent({...newStudent,gender:e.target.value})
    }
    function handleTechs(e){
        if(e.target.checked===true){
            setNewStudent({...newStudent,technologies:[...newStudent.technologies,e.target.value]})
        }
        else{
            var temp = [...newStudent.technologies];
            var ind = temp.indexOf(e.target.value);
            temp.splice(ind,1);
            setNewStudent({...newStudent,technologies:[...temp]})
        }
    }
    return (
        <div className='mybox'>
            <h3>Student Form</h3>
            FirstName:<input type="text" onChange={(e)=>{handleFirstname(e)}}/>
            <br></br>
            LastName:<input type="text" onChange={(e)=>{handleLastname(e)}}/>
            <br></br>
            Date of Birth:<input type="date" onChange={(e)=>{handleDOB(e)}}/>
            <br></br>
            Gender:
            <input type="radio" name="gen" value='m' onChange={(e)=>{handleGender(e)}}/>:Male
            <input type="radio" name="gen" value='f' onChange={(e)=>{handleGender(e)}} />:Female
            <input type="radio" name="gen" value='o' onChange={(e)=>{handleGender(e)}} />:Others
            <br />
            <input type="checkbox" onChange={(e)=>{handleTechs(e)}} value="node"/>:Nodejs
            <br />
            <input type="checkbox" onChange={(e)=>{handleTechs(e)}} value="rjs" />:ReactJS
            <br />
            <input type="checkbox" onChange={(e)=>{handleTechs(e)}}  value="ang"/>:Angular
            <br />
            <input type="checkbox" onChange={(e)=>{handleTechs(e)}} value="expr" />:Express
            <br />
            <button onClick={()=>{addStu()}}>Add Student</button>
            <ul id="studentcards">
                {
                    allStudents.map((student)=>{
                        return (
                            <li>
                                <h3>{student.firstname.toUpperCase()+" "+student.lastname}</h3>
                                <h4>DoB:{student.dob}</h4>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default StrudentForm