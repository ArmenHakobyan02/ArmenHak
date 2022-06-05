import react from "react";
import "./Admin.css"

export default  (props)=>{
    return(
        <>
        
        {props.registr ? 
        <>

        <div id="ParLoginDiv">
            <div id="AdminPar">
                <button className="btn btn-danger Adminchlos" onClick={props.Adminclos}><i className="fa-solid fa-x"></i></button>
                <h1 className="text-center">Admin Login</h1>
               <form action="">
                <input className="inputlogin"  onInput={props.logininput.bind(this)}  type="text" placeholder="Admin Name" value={props.logininputPar} /> <br/>
                <input className="inputlogin" onInput={props.logininput2.bind(this)} type="password" placeholder="Admin Password" value={props.loginPasswordPar}/>
               </form>  
               <button className="btn btn-danger d-block mx-auto mt-5 loginbtn" onClick={props.LoginBtn} > Next </button>
            </div>
        </div> 
        </>
        : null}
        </>
    )
}