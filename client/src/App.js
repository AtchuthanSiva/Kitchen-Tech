import React, { Component } from 'react';
//import {BrowserRouter as Router, Route} from 'react-router-dom';
// import  db  from "../src/server/config";
// import Login from './Components/Login';
// import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';


function App() {
//   constructor(props){
//     super(props);

//     this.state = {
//       user: null,
//     };

//     this.authListener = this.authListener.bind(this);
//   }
  
//   componentDidMount() {
//     this.authListener();
//   }

//   authListener() {
//     db.auth().onAuthStateChanged((user) => {
//       if(user){
//         this.setState({ user });
//       }else{
//         this.setState({ user: null });
//       }
//     })
//   }


  return(
    <>
      <Navbar/>
    </>
  );




}

export default App;
