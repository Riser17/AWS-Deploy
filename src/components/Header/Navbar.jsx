
import React, { useContext, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import logo from '../../Assets/logo.webp'
import "./Navbar.css"
import {UserContext} from '../../Context/UseContext';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate , NavLink } from "react-router-dom"

const Navbar = ({setLocal}) => {

    const {logindata, setLoginData } = useContext(UserContext)
    // const [logindata1, setLogindata1] = useState(localStorage.getItem("usersdatatoken"));
    // console.log(logindata1);
    const history = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const logoutuser = async () => {
        let token = localStorage.getItem("usersdatatoken");

        const res = await fetch("/api/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                Accept: "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
      

        if (data.status === 201) {
          
            localStorage.removeItem("usersdatatoken");
            setLoginData(false)
            setLocal("");
            history("/login");
        } else {
            console.log("error");
        }
    }

    const goDash = () => {
        history("/dash")
    }

    const goAddUser = () => {
        history("/dash/register")
    }

    const goError = () => {
        history("*")
    }

    return (
        <div>
            <header>
                <nav>
        <NavLink to={logindata.status === 201 || logindata ? ('/dash'):("/")}><img src={logo} alt="MLE"  height={'60px'} /></NavLink>
                    <div className="avtar">
                        {
                            logindata.ValidUserOne ? <Avatar style={{ background: "salmon", fontWeight: "bold", textTransform: "capitalize" }} onClick={handleClick}>{logindata.ValidUserOne.fullname[0].toUpperCase()}</Avatar> :
                                <Avatar style={{ background: "blue" }}/>
                        }

                    </div>


                        {
                            logindata.ValidUserOne ? (
                                <>
                                                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                                    <MenuItem onClick={() => {
                                        goDash()
                                        handleClose()
                                    }}>Profile</MenuItem>
                                    {logindata.ValidUserOne.userRole==='admin'|| logindata.ValidUserOne.userRole==='superadmin'?(
                                        <MenuItem onClick={() => {
                                            goAddUser()
                                            handleClose()
                                        }}>Add User</MenuItem>
                                    ):('')}
                                    <MenuItem onClick={() => {
                                        logoutuser()
                                        handleClose()
                                    }}>Logout</MenuItem>
                                    </Menu>
                                </>
                            ) : (
                              
                             <></>
                              
                            )
                        }
                </nav>
            </header>
        </div>
    )
}

export default Navbar