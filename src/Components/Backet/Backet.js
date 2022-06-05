import react from "react";
import "./Backet.css"
import { Link } from "react-router-dom";

export default (props)=>{
    return(
        <>
        <h1 className="SectionText">Products</h1>
        {props.backet.length === 0 ? 
       <div> 
           
           <h1>Backet is empty</h1>
        <button><a href={"/"}>Go To Home</a></button>
        </div>
        :
    <div className="parbacket">
        
        {props.backet.map((e,i)=>{
            return(
             <div className="backet">
                 <button onClick={props.delete.bind(this,e,i)} className="btn btn-danger backetchlos">X</button>
                    <img width='100%' height='230px' src={e.img} />                   
                    <h3>Name`{e.Name}</h3>
                    <h2>Price`{e.Price}</h2>
                    <h2>Age`{e.age}</h2>
                    <h2>Couty`{e.backetcount}</h2>
            </div> )
        })}
            
        
    </div> 
               }        
        </>
        
    )
}