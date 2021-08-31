import React, { Component, useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Input from "./Input/Input";
import LattestNewsList from "./LattestNewsList/LatestNewsList";
import TopNews from "./TopNews/TopNews";
import Componentzxc from "./Componentzxc";
import { reject } from "q";
 
function App () {
  
   return (
   <div className = 'App'>
     <h1></h1>
    
    
    <Header></Header>
      <div className='Container'>
        <Input/>
        <TopNews/>
        <LattestNewsList />
        {/* <Componentzxc/> */}
      </div>
    
    
   </div>)
  }


export default App;
