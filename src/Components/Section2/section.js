import React from "react";
import "./section.css"


export default (props)=>{
    return(
        <>
        <div className="section">
            {props.foto.map((e,i)=>{
                return(
                   <div className="foto">
                           <img  src={e.image} className="nkar" />
   
                    </div>  
                )
            })}
        </div>
        </>
    )
}