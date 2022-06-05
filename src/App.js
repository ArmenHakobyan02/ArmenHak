import React, { Component } from "react";
import  "./App.css"
import Header from "./Components/Header/Header"
import Cars from "./Components/Cars/Cars"
import Actual from "./Components/actual/actual";
import Futer from "./Components/Header/Futer/Futer"
import Section from "./Components/Section2/section";
import { Route, Routes } from "react-router-dom";
import Backet from "./Components/Backet/Backet";


export default class App extends Component{

    state={
      
      Nav : false,

      sontbtn : [
        {
          id : 0,
          productype : "Jeep",
        },
        {
          id : 1,
          productype : "Sedan",
        },
        {
          id : 2,
          productype : "Kupe",
        },
      ],

      cars:[
        {
          id:0,
          img : "https://cdn.euroncap.com/media/40810/mercedes-benz-a-class-359-235.201810081607371039.jpg?mode=crop&width=359&height=235",
          Name:"Mersedes-Benz",
          Price: 25000,
          age : "2018",
          actual : false,
          LearnMore : false,
          Newdiv : false,
          Count : 20,
          adingcount : 1,
          backetcount : 0,
          index : null,
          inputchange : 0,
          Sale : 0,
          productype : "Sedan",
          text : "Mercedes-Benz, գերմանական ավտոմեքենայի մակնիշ։ Կազմավորվել է 1926 թվականին։",   
        },
        {
          id:1,
          img : "https://www.autoinfluence.com/wp-content/uploads/2015/08/450h-e1439829771606.jpg",
          Name:"Lexus",
          Price: 35000,
          age : "2016",
          actual : false,
          LearnMore: false,
          Newdiv : false,
          Count : 20,
          adingcount : 1,
          backetcount : 0,
          index : null,
          inputchange : 0,
          Sale : 0,
          productype : "Jeep",
          text : "Լեքսուս, ճապոնական Տոյոտա ընկերության շքեղ ավտոմեքենաների բրենդ։ Լեքսուս մակնիշը վաճառվում է շուրջ 70 երկրներում և աշխարհահռչակ վայրերում[2]։",
        },
        {
          id:2,
          img : "https://pictures.topspeed.com/IMG/crop/201905/2020-bmw-1-series-wi-2_1600x0w.jpg",
          Name:"BMW",
          Price: 30000,
          age : "2020",
          actual : false,
          LearnMore : false,
          Newdiv : false,
          Count : 20,
          adingcount : 1,
          backetcount : 0,
          index : null,
          inputchange : 0,
          Sale : 0,
          productype : "Jeep",
          text : "BMW (գերմ.՝ Bayerische MotorenWerke AG, հայերեն թարգմանությամբ՝ Բավարական շարժիչների գործարաններ ԲԸ),",
        },
        {
          id:3,
          img : "https://wallpaperaccess.com/full/3659126.jpg",
          Name:"Audi",
          Price: 45000,
          age : "2019",
          actual : false,
          LearnMore : false,
          Newdiv : false,
          Count : 20,
          adingcount : 1,
          backetcount : 0,
          index : null,
          inputchange : 0,
          Sale : 0,
          productype : "Sedan",
          text : "Աուդի (գերմաներեն՝ Audi), գերմանական ավտոարտադրող ընկերություն։ Պատկանում է Ֆոլկսվագեն ընկերությանը, ",
        },
        {
          id:4,
          img : "https://media.ed.edmunds-media.com/porsche/panamera/2020/oem/2020_porsche_panamera_sedan_4-10-years-edition_fq_oem_1_1600.jpg",
          Name:"Porsche",
          Price:  45000,
          age : "2020",
          actual : false,
          LearnMore : false,
          Newdiv : false,
          Count : 20,
          inputchange : 0,
          adingcount : 1,
          backetcount : 0,
          Sale : 0,
          productype : "Kupe",
          index : null,
          text : "Porsche AG (արտասանվում է Պորշը, լրիվ անվանումը Doktor Ingenieur honoris causa Ferdinand Porsche Aktiengesellschaft), գերմանական ճարտարագիտական ընկերություն,",
        },
        
        {
          id:5,
          img : "https://paultan.org/image/2021/05/2021-Range-Rover-Evoque-P300-HST-2-e1620786244613-1200x629.jpg",
          Name: "Land Rover",
          Price:  50000,
          age : "2018",
          actual : false ,
          LearnMore : false,
          Newdiv : false,
          Count : 20,
          adingcount : 1,
          backetcount : 0,
          index : null,
          inputchange : 0,
          Sale : 0,
          productype : "Jeep",
          text : "Land Rover, Jaguar Cars ile beraber Jaguar Land Rover'in yan kuruluşu olan İngiliz bir arazi aracı üreticisidir. Merkezi Solihull, İngiltere'dedir. Aslında Rover markası altında bir modelin adıydı. ",
        },
        
      ],

      More : 3,

      CarsCopy : [
        {
          id:0,
          img : "https://cdn.euroncap.com/media/40810/mercedes-benz-a-class-359-235.201810081607371039.jpg?mode=crop&width=359&height=235",
          Name:"Mersedes-Benz",
          Price: 25000,
          age : "2018",
          actual : false,
          LearnMore : false,
          Newdiv : false,
          Count : 20,
          adingcount : 1,
          backetcount : 0,
          index : null,
          inputchange : 0,
          Sale : 0,
          productype : "Sedan",
          text : "Mercedes-Benz, գերմանական ավտոմեքենայի մակնիշ։ Կազմավորվել է 1926 թվականին։",   
        },
        {
          id:1,
          img : "https://www.autoinfluence.com/wp-content/uploads/2015/08/450h-e1439829771606.jpg",
          Name:"Lexus",
          Price: 35000,
          age : "2016",
          actual : false,
          LearnMore: false,
          Newdiv : false,
          Count : 20,
          adingcount : 1,
          backetcount : 0,
          index : null,
          inputchange : 0,
          Sale : 0,
          productype : "Jeep",
          text : "Լեքսուս, ճապոնական Տոյոտա ընկերության շքեղ ավտոմեքենաների բրենդ։ Լեքսուս մակնիշը վաճառվում է շուրջ 70 երկրներում և աշխարհահռչակ վայրերում[2]։",
        },
        {
          id:2,
          img : "https://pictures.topspeed.com/IMG/crop/201905/2020-bmw-1-series-wi-2_1600x0w.jpg",
          Name:"BMW",
          Price: 30000,
          age : "2020",
          actual : false,
          LearnMore : false,
          Newdiv : false,
          Count : 20,
          adingcount : 1,
          backetcount : 0,
          index : null,
          inputchange : 0,
          Sale : 0,
          productype : "Jeep",
          text : "BMW (գերմ.՝ Bayerische MotorenWerke AG, հայերեն թարգմանությամբ՝ Բավարական շարժիչների գործարաններ ԲԸ),",
        },
        {
          id:3,
          img : "https://wallpaperaccess.com/full/3659126.jpg",
          Name:"Audi",
          Price: 45000,
          age : "2019",
          actual : false,
          LearnMore : false,
          Newdiv : false,
          Count : 20,
          adingcount : 1,
          backetcount : 0,
          index : null,
          inputchange : 0,
          productype : "Sedan",
          Sale : 0,
          text : "Աուդի (գերմաներեն՝ Audi), գերմանական ավտոարտադրող ընկերություն։ Պատկանում է Ֆոլկսվագեն ընկերությանը, ",
        },
        {
          id:4,
          img : "https://media.ed.edmunds-media.com/porsche/panamera/2020/oem/2020_porsche_panamera_sedan_4-10-years-edition_fq_oem_1_1600.jpg",
          Name:"Porsche",
          Price:  45000,
          age : "2020",
          actual : false,
          LearnMore : false,
          Newdiv : false,
          Count : 20,
          inputchange : 0,
          adingcount : 1,
          backetcount : 0,
          Sale : 0,
          index : null,
          productype : "Kupe",
          text : "Porsche AG (արտասանվում է Պորշը, լրիվ անվանումը Doktor Ingenieur honoris causa Ferdinand Porsche Aktiengesellschaft), գերմանական ճարտարագիտական ընկերություն,",
        },
        
        {
          id:5,
          img : "https://paultan.org/image/2021/05/2021-Range-Rover-Evoque-P300-HST-2-e1620786244613-1200x629.jpg",
          Name: "Land Rover",
          Price:  50000,
          age : "2018",
          actual : false ,
          LearnMore : false,
          Newdiv : false,
          Count : 20,
          adingcount : 1,
          backetcount : 0,
          index : null,
          inputchange : 0,
          Sale : 0,
          productype : "Jeep",
          text : "Land Rover, Jaguar Cars ile beraber Jaguar Land Rover'in yan kuruluşu olan İngiliz bir arazi aracı üreticisidir. Merkezi Solihull, İngiltere'dedir. Aslında Rover markası altında bir modelin adıydı. ",
        },
      ],

      actual :[],

      

      foto : [
        {
          image : "https://media-cdn.tripadvisor.com/media/photo-s/1b/69/5d/5a/tramonto-a-sangineto.jpg",
        },
        {
          image : "https://www.dzoom.org.es/wp-content/uploads/2010/09/paisaje-profundidad-lineas-734x489.jpg",
        },
        {
          image : "http://newsarmenia.am/upload/iblock/b1b/1ssfrazftj772j4tdxu0al3dtxkottrn.jpg",
        },
        {
          image : "https://cdn.getyourguide.com/img/location/5ffeb54b249cc.jpeg/92.jpg",
        },
      ],
      
          
        backet : [],

        AdminNext : false,
        registr : false,

        Login : "Admin01",
        Password : "Admin02",

        logininput : "",
        Passwordinput : "",


        
        closeCreateCard : false,

        NewCardName : "",
        NewCardimg : "",
        NewCardPrice : "",
        NewCardage : "",
        NewCardCount : "",
        NewCardtext : "",


        
    }
        

    actual =(e,i)=>{

      e.actual =! e.actual
      this.setState({})
      let fain = this.state.actual.find(k=>k==e)
      this.setState({})

      if(fain == undefined && e.actual==true){
         this.state.actual.push(e)
      }else{
        this.setState({})
      }
      this.setState({})

    }

    LearnMore = (e,i)=>{
      e.LearnMore = true
    
      this.setState({})
      
    }

    Jnjel=(e,i)=>{
      e.LearnMore = false
      this.setState({})

      console.log("jkhjk")
    }

    
    xcard=(e,i)=>{
      this.state.actual.splice(i,1)
      this.setState({})
    }

    minusbtn = (e,i)=>{
      e.adingcount--
      this.setState({})
    }
    plyusbtn = (e,i)=>{
      e.adingcount++
      this.setState({})
    }

    addtobacket=(e,i)=>{
      e.index = i
      let fain = this.state.backet.find(k=>k==e)    
        this.setState({})
      if(fain == undefined ){
        this.state.backet.push(e) 
      }
      else{
        this.setState({})
      }
      e.backetcount += e.adingcount
      e.Count -= e.adingcount

      if(e.adingcount > e.Count){
        e.adingcount = e.Count
        this.setState({})
      }
      if(e.Count === 0){
        this.state.CarsCopy.splice(i,1)
        this.setState({})
      }
      this.setState({})
    } 
    

    backetdelete = (e,i)=>{
      let fain = this.state.backet.find(k=>k==e)    
        this.setState({})
      if(fain === e ){
      this.state.backet.splice(i,1,)
      e.Count = e.Count + e.backetcount
      e.backetcount=0
      e.adingcount = 1
      this.setState({})
      }else{
        this.state.CarsCopy.splice(e.index, 0, e)
        this.state.backet.splice(i,1)
        e.Count=e.Count + e.backetcount
        e.backetcount=0
        e.adingcount = 1
        this.setState({})
      }
}
    inputSale=(e,i,k)=>{
        e.inputchange = k.target.value
        this.setState({})
      }

     Sale = (e,i)=>{
       e.Sale = Math.floor(e.Price-(e.Price*e.inputchange/100)) 
       if(e.Sale == e.Price){
         e.Sale = 0
       }
       this.setState({})
      }
      Bars=()=>{
        this.state.Nav =! this.state.Nav
        this.setState({})
      }
      sontbtnclick=(e,i)=>{
        this.state.CarsCopy = this.state.cars
        let w = this.state.CarsCopy.filter(w=>w.productype==e.productype)
        this.state.CarsCopy = w
        this.setState({})
      }
      Moreclick=()=>{
        
        if(this.state.More < this.state.CarsCopy.length){
          this.state.More++
          
        }
        else if(this.state.More >= this.state.CarsCopy.length){
          this.state.More = 3
        }
        this.setState({})
        console.log(this.state.More)
      }
      LoginBtn=()=>{
        if(this.state.Login == this.state.logininput && this.state.Password == this.state.Passwordinput){
          this.state.AdminNext = true
          this.state.registr = false
          this.state.logininput = ""
          this.state.Passwordinput = ""
          this.setState({})
        }else{
          this.state.logininput = ""
          this.state.Passwordinput = ""
          this.setState({})
        }
      }

      logininput=(k)=>{
        this.state.logininput = k.target.value
        this.setState({})      
      }
      logininput2=(x)=>{
       this.state.Passwordinput = x.target.value
       this.setState({})
      }

      Vxod=()=>{
        if(this.state.AdminNext == false ){
          this.state.registr = true
        }
           
           else if(this.state.registr == false){
            this.state.AdminNext = false
          }
           this.setState({})
      }
      Adminclos=()=>{
        this.state.registr = false
        this.setState({})
      }
      addsCard=()=>{
        this.state.closeCreateCard = true
        this.setState({})
      }
      closeCreateCardfunction=()=>{
        this.state.closeCreateCard = false
        this.setState({})
      }
      
      CardImage=(k)=>{
       this.state.NewCardimg = k.target.value 
        console.log(this.state.NewCardimg)
        this.setState({})
      }
      CardName=(k)=>{
       this.state.NewCardName  = k.target.value
        console.log(this.state.NewCardName)
        this.setState({})
      }
      CardPrice=(k)=>{
        this.state.NewCardPrice = k.target.value 
        console.log(this.state.NewCardPrice)
        this.setState({})
      }
      Cardage=(k)=>{
        this.state.NewCardage = k.target.value  
        console.log(this.state.NewCardage)
        this.setState({})
      }
      CardCount=(k)=>{
        this.state.NewCardCount = k.target.value  
        console.log(this.state.NewCardCount)
        this.setState({})
      }
      CardText=(k)=>{
        this.state.NewCardtext = k.target.value
        this.setState({})
      }
      CardNext=()=>{
       let  NewObject ={
          id : Date.now(),
          Name : this.state.NewCardName,
          img : this.state.NewCardimg,
          age : this.state.NewCardage,
          Price : this.state.NewCardPrice,
          Count : this.state.NewCardCount,
          text : this.state.NewCardtext,
          adingcount : 1,
          backetcount : 0,
          index : null,
          inputchange : 0,
          Sale : 0,
          actual : false ,
          LearnMore : false,
          Newdiv : false,
        }
        this.setState({})
        this.state.cars.unshift(NewObject)
        this.state.CarsCopy.unshift(NewObject)
        this.state.closeCreateCard = false
        this.setState({})
        
        
      }



    
      
    render(){
      return(
        <>
      <Header Bars={this.Bars} Nav={this.state.Nav} Vxod={this.Vxod}  registr={this.state.registr} AdminNext={this.state.AdminNext}  /> 
        
  <Routes>

        <Route exact path="/"
         element={<Cars CarsCopy={this.state.CarsCopy}
                        inputSale={this.inputSale} 
                        inputchange={this.state.inputchange}
                        Sale={this.Sale}
                        actual={this.actual}
                        LearnMore={this.LearnMore}
                        X={this.Jnjel} 
                        xdiv={this.xdiv}
                        plyusbtn={this.plyusbtn} 
                        minusbtn={this.minusbtn} 
                        addtobacket={this.addtobacket}
                        sontbtn={this.state.sontbtn}
                        sontbtnclick={this.sontbtnclick}
                        More={this.state.More}
                        Moreclick={this.Moreclick}
                        logininput={this.logininput}
                        logininput2={this.logininput2}
                        logininputPar={this.state.logininput}
                        loginPasswordPar={this.state.Passwordinput}
                        LoginBtn={this.LoginBtn}
                        registr={this.state.registr}
                        Adminclos={this.Adminclos}
                        AdminNext={this.state.AdminNext}
                        addsCard={this.addsCard}
                        closeCreateCardfunction={this.closeCreateCardfunction}
                        closeCreateCard={this.state.closeCreateCard}
                        CardImage={this.CardImage}
                        CardName={this.CardName}
                        CardPrice={this.CardPrice}
                        Cardage={this.Cardage}
                        CardCount={this.CardCount}
                        CardNext={this.CardNext}
                        CardText={this.CardText}
                    
                         />} >
        </Route>  

         <Route  path='/actual' element={<Actual actual={this.state.actual} xcard={this.xcard} />}>  
              </Route>

         <Route path='/backet' element={<Backet backet={this.state.backet} delete={this.backetdelete} />}>
        </Route>
    </Routes> 

         <Section foto={this.state.foto}/>
         <Futer/>  
           
        </>
        )
    }
  
  }