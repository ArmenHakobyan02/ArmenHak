
// import Users from "./Components/Users/Users" ;
import React, { Component } from "react";
import  "./App.css"
import Header from "./Components/Header/Header"
import Cars from "./Components/Cars/Cars"
import Actual from "./Components/actual/actual";
import Futer from "./Components/Header/Futer/Futer"
import Section from "./Components/Section2/section";


export default class App extends Component{

    state={
      
      cars:[
        {
          id:0,
          img : "https://cdn.euroncap.com/media/40810/mercedes-benz-a-class-359-235.201810081607371039.jpg?mode=crop&width=359&height=235",
          Name:"Mersedes-Benz",
          Price:"25000$",
          age : "2018",
          actual : false,
          LearnMore : false,
          Newdiv : false,
          text : "Mercedes-Benz, գերմանական ավտոմեքենայի մակնիշ։ Կազմավորվել է 1926 թվականին։",   
        },
        {
          id:5,
          img : "https://www.autoinfluence.com/wp-content/uploads/2015/08/450h-e1439829771606.jpg",
          Name:"Lexus",
          Price:"35000$",
          age : "2016",
          actual : false,
          LearnMore: false,
          Newdiv : false,
          text : "Լեքսուս, ճապոնական Տոյոտա ընկերության շքեղ ավտոմեքենաների բրենդ։ Լեքսուս մակնիշը վաճառվում է շուրջ 70 երկրներում և աշխարհահռչակ վայրերում[2]։",
        },
        {
          id:1,
          img : "https://pictures.topspeed.com/IMG/crop/201905/2020-bmw-1-series-wi-2_1600x0w.jpg",
          Name:"BMW",
          Price:"30000$",
          age : "2020",
          actual : false,
          LearnMore : false,
          Newdiv : false,
          text : "BMW (գերմ.՝ Bayerische MotorenWerke AG, հայերեն թարգմանությամբ՝ Բավարական շարժիչների գործարաններ ԲԸ),",
        },
        {
          id:2,
          img : "https://wallpaperaccess.com/full/3659126.jpg",
          Name:"Audi",
          Price:"45000$",
          age : "2019",
          actual : false,
          LearnMore : false,
          Newdiv : false,
          text : "Աուդի (գերմաներեն՝ Audi), գերմանական ավտոարտադրող ընկերություն։ Պատկանում է Ֆոլկսվագեն ընկերությանը, ",
        },
        {
          id:4,
          img : "https://media.ed.edmunds-media.com/porsche/panamera/2020/oem/2020_porsche_panamera_sedan_4-10-years-edition_fq_oem_1_1600.jpg",
          Name:"Porsche",
          Price: "45000$",
          age : "2020",
          actual : false,
          LearnMore : false,
          Newdiv : false,
          text : "Porsche AG (արտասանվում է Պորշը, լրիվ անվանումը Doktor Ingenieur honoris causa Ferdinand Porsche Aktiengesellschaft), գերմանական ճարտարագիտական ընկերություն,",
        },
        
        {
          id:3,
          img : "https://paultan.org/image/2021/05/2021-Range-Rover-Evoque-P300-HST-2-e1620786244613-1200x629.jpg",
          Name: "Land Rover",
          Price: "50000$",
          age : "2018",
          actual : false ,
          LearnMore : false,
          Newdiv : false,
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
      ]
      
          
        
      

    }
      

    actual =(e,i)=>{

      e.actual = !e.actual
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

  
  
    render(){
      return(
        <>
          <Header/>
          
          <Cars cars={this.state.cars} actual={this.actual} LearnMore={this.LearnMore} X={this.Jnjel}  xdiv={this.xdiv} />
          <Actual actual={this.state.actual} xcard={this.xcard} />
          <Section foto={this.state.foto} />
          <Futer/>
        </>
        )
    }
  
  }