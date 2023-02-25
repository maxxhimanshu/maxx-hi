import HeroPage from './components/HomePage/HeroPage';
import Sec from './components/HomePage/Sec';
import Third from './components/HomePage/Third';
import Fourth from './components/HomePage/Fourth';
import Fifth from './components/HomePage/Fifth';
import Drop from './components/recruiterForm.js';
import UserProfile from './components/UserProfile.js';
import RegisterForm from "./components/loginPage/Register.js"
import Login from "./components/loginPage/login.js"
import JobForm from './components/form.js'
import { Routes, Link, Route } from 'react-router-dom'

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
            </Routes>


            {/* <Drop />
            <RegisterForm />
      
            <JobForm />
            <UserProfile /> */}
        </div>
    )
}
export default App;