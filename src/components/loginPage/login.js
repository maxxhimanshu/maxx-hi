// import React from 'react'
// import '../../styles/Login.css';

// function Login() {
//   return (

//     <div className="login">

//         <div className='nav'>
//           <div className='logo'>
//             <a href="#hiclousia"><h1 href='#'>Hic<span>LOUSIA</span></h1></a>
//           </div>
          
//           <div className='menu'>
//             <ul>
//               <li><a href='#talent'>Talent Profile</a></li>
//               <li><a href='#rec'>Recruiter</a></li>
//               <li><a href='#about'>About Us</a></li>
//               <li><a href='#contact'>Contact Us</a></li>
//               <li><a href='#login'>Login</a></li>
//             </ul>
//           </div>
//         </div>
          
        
 
//        <div className="box">
//         <br></br><br></br>
//          <h1>Login</h1>

//            <div class="inbox">
             
//               <form>
//                 <input type="text" placeholder="Email or User Name" />
//                 <input type="password" placeholder="Password" />
//               </form>
                
              

//               <ul>
//                 <li><a href="#for">Forgot Password?</a></li>
//                 <li><a href="#al">Already have an Account?</a></li>
//               </ul>
//               <br></br>
//               <br></br>
//               <button id="log">Log In</button>
              
              
//            </div>
//        </div>
//     </div>
//   );
// }

// export default Login;

import React from "react";
import * as Components from './SignIn_Login';



function Login() { 
    const [signIn, toggle] = React.useState(true);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [lastName,setLastName]=React.useState("");

    function LoginHandler(e) {
      fetch("localhost:8000/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) =>
        response.json().then((responseData) => {
          console.log(responseData);
          // setResult(responseData);
        
          if (responseData.status) {
            navigate("/login")
          }
               
      setTimeout(() => {
        setResult({ status: false, message: "" });
      }, 8000);
        })
      );
      
    }
    function SignUpHandler(e) {
      fetch("localhost:8000/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) =>
        response.json().then((responseData) => {
          console.log(responseData);
          // setResult(responseData);
        
          if (responseData.status) {
            navigate("/login")
          }
               
      setTimeout(() => {
        setResult({ status: false, message: "" });
      }, 8000);
        })
      );
      
    }

     return(
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input type='text' placeholder=' First Name' />
                     <Components.Input type='text' placeholder='Last Name' />
                     <Components.Input type='email' placeholder='Email' />
                     <Components.Input type='password' placeholder='Password' />
                     <Components.Button>Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Login</Components.Title>
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      {/* <Components.Anchor href='#'>Forgot your password?</Components.Anchor> */}
                      <Components.Button>Log In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello!!!</Components.Title>
                       <Components.Paragraph>
                           Enter Your personal details here..
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Signin Up
                           </Components.GhostButton> 
                           <br></br>
                           <Components.GhostButton onClick={() => toggle(true)} >
                               Reqcruiter
                           </Components.GhostButton>
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
     )
}

export default Login;