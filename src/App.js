import HeroPage from './components/HomePage/HeroPage';
import Sec from './components/HomePage/Sec';
import Third from './components/HomePage/Third';
import Fourth from './components/HomePage/Fourth';
import Fifth from './components/HomePage/Fifth';
import Drop from './components/recruiterForm.js';
import UserProfile from './components/UserProfile.js';
import RegisterForm from "./components/loginPage/Register.js"
import Login from "./components/loginPage/login.js"
import JobForm from './components/JobForm.js'
import FormUserDetails from './components/multiForm/FormUserDetails';
import FormPersonalDetails from "./components/multiForm/FormPersonalDetails"
import UserForm from "./components/multiForm/UserForm"
import Confirm from './components/multiForm/Confirm';
import Success from './components/multiForm/Success';


import { Routes, Link, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<>
                    <HeroPage />
                    <Sec />
                    <Third />
                    <Fourth />
                    <Fifth />
                </>} />
                <Route path ="login" element={<Login />}/>
                <Route path ="multiform1" element={<FormUserDetails />}/>
                <Route path ="multiform2" element={<FormPersonalDetails />}/>
                <Route path ="multiform3" element={<UserForm />}/>
                <Route path ="multiform4" element={<Confirm />}/>
                <Route path ="multiform5" element={<Success />}/>
                <Route path ="multiform6" element={<JobForm />}/>
                <Route path ="multiform7" element={<UserProfile />}/>


                

                

            </Routes>


            {/* <Drop />
            <RegisterForm />
      
            <JobForm />
            <UserProfile /> */}
        </div>
    )
}
export default App;