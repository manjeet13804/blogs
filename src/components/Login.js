import "./SignUp.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';



const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (e) => {
        e.preventDefault();
        let DATA = {
            email: email,
            password: password
        }
        localStorage.setItem('userId', DATA.email)

        axios.post('https://real-estate-backend-1.onrender.com/api/user/login', DATA)

            .then(function (response) {
                // console.log(DATA,response)
                console.log(response.data.message);

                const res = response.data.message
                console.log(res);
                if (res === "Login successful") {
                    // console.log("Hello")
                    localStorage.setItem('token', response.data.token)
                    // console.log("Hello")
                    // navigate('/dashboard')
                }
                else {

                    alert(response.data.message)
                    localStorage.setItem('token', "BLOGS " + response.data.token)
                    console.log(localStorage, localStorage.token)
                    // headers: {
                    //         Authorization: localStorage.getItem('token')
                    //      }
                    navigate('/dashboard')
                    // console.log("Hello")

                    // alert(response.data.message)
                    // navigate('/dashboard')s

                }
            })
            .catch(function (error) {
                console.log(error);
                alert('error')
            });
    }

    return <div className="main-box">
        <section className="information">
            <p className="login-para">Enter your credentials to login your account</p>
            <form method="POST" >
                <input className="input-box" type="email" placeholder="User Id" required name="email"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }} /><br />

                <input className="input-box" type="password" placeholder="password" required name="password"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                <br />
                <input type="checkbox" className="checkbox" />
                <span>  Remember me?</span>
                <button className="btn" onClick={login}>Login</button>
            </form>
            <Link to="/">
                <div className="forget"></div>
            </Link>
            <div className="signup-link">
                <span>Need an Account? </span>
                <Link to="/signup">
                    <span className="signup-link1">Sign Up</span>
                </Link>
            </div>
        </section >

    </div >
}
export default Login; 
