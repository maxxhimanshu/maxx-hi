import React from 'react' ;
import '../styles/userProfile.css';
import { useState } from 'react';



 function UserProfile() { 
    

    // function GetData (){
    //     fetch("http://localhost:8000//personal/:id",)
    // }
      return (
    <div className="hero">
        <div className="nav">
            <div className="logo">
                <a href="#hi"><h1>Hic<span>LOUSIA</span></h1></a>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#job">Jobs</a></li>
                    <li><a href="#car">Career Profile</a></li>
                    <li><a href="#up">Upskilling </a></li>
                    <li><a href="#sh">Share</a></li>
                    <li><a href="#my">My Docs</a></li>
                </ul>
            </div>
        </div>

        <div class="page">

            <div class="div1">
                
            </div>

            <div class="div2">
                <div class="one">
                    <br></br>
                    <div class="circle">

                    </div>
                    <p>Home</p>
                    </div>
                <button id="two">Education</button>
                <button id="three">Contact</button>
            </div>



            <div class="div3">

                <div class="div3-1">
                    <button id="I-am-a">I am a</button>
                    <button id="I-am-a">Primary Skills</button>
                </div>
                

                <div class="div3-2">
                    <button id="Experience">Experience</button>
                    <button id="Experience">Secondary skills</button>
                </div>
               
                <div class="down">
                   <button id="Add-Experience">Add Experience</button>

                   <button id="Experience-1">Experience 1</button>
                   <button id="Experience-1">Experience 1</button>
                   <button id="Experience-1">Experience 1</button>
                </div>
                   
                
            </div>

        </div>

    </div>
  )
}
export  default UserProfile