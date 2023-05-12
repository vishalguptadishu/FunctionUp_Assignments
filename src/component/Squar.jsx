import React from "react";



let Squar= (props)=>{
return(
    <div onClick={props.ev} className="squar">
        <h5>{props.value}</h5>
    </div>
)
}
export default Squar;