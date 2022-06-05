import React from "react";
import "./Cars.css"
import Section from "../Section2/section";
import Admin from "../Admin/Admin";



export default (props)=>{
    return(
        <>
        <Admin logininput={props.logininput} logininput2={props.logininput2} LoginBtn={props.LoginBtn} registr={props.registr}  Adminclos={props.Adminclos} logininputPar={props.logininputPar} loginPasswordPar={props.loginPasswordPar} />
        <h1 className="SectionText">Products</h1>
        <div className="sontbtn">
            {props.sontbtn.map((e,i)=>{
                return(
                    <div>
                      <button className="btn btn-danger" onClick={props.sontbtnclick.bind(this,e,i)}>{e.productype}</button>
                    </div>
                )
                
            })}
</div>

            

        <div id="SectionOne" >
         {props.AdminNext ?   
        <div   id="newCard">
        <i className="fa-thin fa-plus btn btn-light adds" onClick={props.addsCard}></i>
        {props.closeCreateCard ?
        <div className="addsCardPar">
            <div className="addsCardchild">
                <button className="btn btn-danger closeNewCard" onClick={props.closeCreateCardfunction}><i className="fa-thin fa-x"></i></button>
                 <h1>Create Card</h1>
                 
                 <input className="inputchild" type="url" onInput={props.CardImage.bind(this)} placeholder="Enter your Image-scr" />                 
                 <input className="inputchild" type="text" onInput={props.CardName.bind(this)}  placeholder="Enter your Name" />
                 <input className="inputchild" type="number" onInput={props.CardPrice.bind(this)}  placeholder="Enter your Price" />
                 <input className="inputchild" type="number" onInput={props.Cardage.bind(this)}  placeholder="Enter your age" />
                 <input className="inputchild" type="number" onInput={props.CardCount.bind(this)} placeholder="Enter your Count" />
                 <input className="inputchild" type="text" onInput={props.CardText.bind(this)} placeholder="Enter your Text" />
                 <button className="btn btn-danger d-block mx-auto mt-2" onClick={props.CardNext}>Next</button>
                  
             </div>
        </div>
        : null }    
        </div>
         : null }   
            {props.CarsCopy.map((e,i)=>{
                return(
                    <>
                    
                    {e.LearnMore ?  <div id="LearnMorePar" >  
                        <div id="par" key={e.id}>
                            <i onClick={props.X.bind(this,e,i)} className="btn fa-solid fa-x X" ></i>                      
                            <img width='100%' height='230px' src={e.img}/>                   
                            <h3>Name`{e.Name}</h3>
                            <h2>Price`{e.Price}$</h2>
                            <h2>Age`{e.age}</h2>
                            <h2>Count`{e.Count - e.adingcount}</h2>
                             <h5><strong>text`</strong>{e.text}</h5>
                        </div> 
                        </div>:null}
                        
                  {i<props.More ? 
                       
                    
                    <div key={e.id}  id="Card" className={e.actual ?  "frac" : null  }>  
                    <input type="number" min="0" max="99" onInput={props.inputSale.bind(this,e,i)} /> 
                    <button onClick={props.Sale.bind(this,e,i)} className="btn btn-danger ">Sell</button>
                             <img width='100%' height='230px' src={e.img} />                  
                            <h3>Name`{e.Name}</h3>
                            <h2>Age`{e.age}</h2>
                            <h2>Price` <span style={e.Sale == 0 ? null : {textDecoration:'line-through',textDecorationColor:"red"}}>{e.Price}</span>{e.Sale == 0 ? null : e.Sale}$ </h2>
                            <h2>Count`{e.Count}</h2>
                           
                            
                            <button className="btn btn-danger btncount"  disabled={e.adingcount === 1 ? true : false } onClick={props.minusbtn.bind(this,e,i)}>-</button>
                            <span className="adingcount">{e.adingcount}</span>
                            <button className="btn btn-success btncount"   disabled={e.adingcount === 20 ? true  : false}   onClick={props.plyusbtn.bind(this,e,i)}>+</button> <br/>

                        <button onClick={props.actual.bind(this,e,i)}  className={e.actual ? "okclick btn btn-info" :"okclick btn btn-outline-info" }><i className="fa-solid fa-heart"></i></button>
                        <button onClick={props.LearnMore.bind(this,e,i)} className="okclick btn btn-primary">LearnMore</button>
                        <button className="btn btn-primary okclick" onClick={props.addtobacket.bind(this,e,i)}><i className="fa-solid fa-cart-plus"></i></button>
                      
                     </div> : null}                             
                     
                      
           
                   </> 
                ) 
            })}
        </div>
    <button  className={props.More == props.CarsCopy.length ? "btn btn-danger Moreclick" :"btn btn-primary Moreclick" }onClick={props.Moreclick}>{props.More == props.CarsCopy.length ? "Less" : "More"}</button>    
        </>
    )
}
