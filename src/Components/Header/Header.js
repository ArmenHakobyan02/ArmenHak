import React from "react";
import "./Header.css"
import Nav from "./Nav/Nav"


export default (props)=>{
    return(
        <>
        <Nav Bars={props.Bars} Nav={props.Nav} LoginBtn={props.LoginBtn} Vxod={props.Vxod} registr={props.registr} AdminNext={props.AdminNext}/>
        <div id="Header">

        </div>
        
        </>
    )
}

