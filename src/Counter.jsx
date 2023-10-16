import React from 'react';

function Counter(props){
    console.log("before JSX",props)

    React.useEffect(function(){
        console.log("Countrer useEffect with no dep array")
    })

    React.useEffect(function(){
        console.log("Countrer useEffect with empty dep array")
    },[])
    
    return(
        <div className='mybox'>
            <div>Count:</div>
            {console.log("inside JSX....")}
        </div>
    )
    
}
export default React.memo(Counter);
