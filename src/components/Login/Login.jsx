import React, { useState, useContext } from 'react'
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import {UserContext} from '../../Context/UseContext';
import "../mix.css"

const Login = ({setLocal}) => {
    const {DashboardValid, setLoginData } = useContext(UserContext);
    const [passShow, setPassShow] = useState(false);
    const history = useNavigate();
    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });

    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };


    const loginuser = async(e) => {
        e.preventDefault();

        const { email, password } = inpval;

        if (email === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!email.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-center"
            });
        } else if (password.length < 6) {
            toast.error("password must be 6 char!", {
                position: "top-center"
            });
        } else {
            const data = await fetch("/api/login",{
                method:"POST",
                withCredentials: true,
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                     email, password
                })
            });

            const res = await data.json();

            if(res.status === 201){
                localStorage.setItem("usersdatatoken",res.result.token);
                await DashboardValid();
                setLocal(res.result.token);
                setTimeout(() => {
                localStorage.removeItem("usersdatatoken");
                setLoginData(false)
                setLocal("");
                history("/login");
                }, 1000*60*60*24);
                history("/dash");
            }
            else{
                toast.error("User not found",{
                    position:"top-center"
                });
            }
        }
    }

    return (
        <div>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome Back, Log In</h1>
                        <p>Hi, we are you glad you are back. Please login.</p>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} onChange={setVal} value={inpval.password} name="password" id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn' onClick={loginuser}>Login</button>
                    </form>
                    <ToastContainer />
                </div>
            </section>
        </div>
    )
}

export default Login