import React from "react";
import "./Cars.css"


export default (props)=>{
    return(
        <>
        <h1 className="SectionText">Products</h1>
        <div id="SectionOne" >

            
            {props.cars.map((e,i)=>{
                return(
                    <>
                    {e.LearnMore ?  <div id="LearnMorePar" >
                        
                        <div id="par" key={e.id}>
                            <button className="X"><i onClick={props.X.bind(this,e,i)} class="fa-solid fa-x" >delete</i> </button>                        
                            <img width='100%' height='230px' src={e.img}/>                   
                            <h3>Name`{e.Name}</h3>
                            <h2>Price`{e.Price}</h2>
                            <h2>Age`{e.age}</h2>
                            <p>text`{e.text}</p>
                        </div> 
                        
                        
                    </div>:null}
                   
                    <div key={e.id}  id="Card" className={e.actual ?  "frac" : null  }>  
                             <img width='100%' height='230px' src={e.img} />                   
                            <h3>Name`{e.Name}</h3>
                            <h2>Price`{e.Price}</h2>
                            <h2>Age`{e.age}</h2>
                        <button onClick={props.actual.bind(this,e,i)}  className={e.actual ? "okclick btn btn-info" :"okclick btn btn-outline-info" }>Actual</button>
                        <button onClick={props.LearnMore.bind(this,e,i)} className="okclick btn btn-primary">LearnMore</button>
                            

                   </div>
                   
                   </> 
                )
            })}
        </div>

        </>
    )
}
