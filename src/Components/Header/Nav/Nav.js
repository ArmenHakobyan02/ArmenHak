import React from "react"
import "./Nav.css"
import { Link } from "react-router-dom"
import Heder from "../Header"




export default (props)=>{

    return(
        <>
        <div id="Nav" >
            <div className="nikname">
               <h2><Link to="/">CARSTILE</Link></h2>  
            </div>
            <ul className="ListPar" key={Date.now()}>  
                <li><Link to="/">Home</Link></li>
                <li><Link to="/actual">Actual</Link></li>
                <li><Link to="/backet">Backet</Link></li>
                <span id="adimn" className="btn" onClick={props.Vxod}> {props.AdminNext ? "Выйти" : "Вход"} </span>
                 <button className="btn btn-secondary bars" onClick={props.Bars}><i className="fa-solid fa-bars"></i></button> 
                
            {props.Nav ? 
                <div className="barsmenu">          
                          <p><Link to="/">Home</Link></p>
                          <p><Link to="/actual">Actual</Link></p>
                          <p><Link to="/backet">Backet</Link></p>
                </div> : null }
            </ul>
        </div>
        </>
    )
}