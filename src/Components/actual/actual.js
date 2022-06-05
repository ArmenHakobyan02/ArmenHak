import "./actual.css"
import react from "react"

export default (props)=>{
    return(
        <div className="par">
         {props.actual.map((e,i)=>{
             return(
                
                 <div className="actual">
                     <button onClick={props.xcard.bind(this,e,i)} className="btn jnjel">X</button>
                     <img width='100%' height='230px' src={e.img} />                   
                            <h3>Name`{e.Name}</h3>
                            <h2>Price`{e.Price}</h2>
                            <h2>Age`{e.age}</h2>
                            
                 </div>
            
             )
         })}
     </div> 
    )
}