import { useHistory, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {CameraAltOutlined} from "@material-ui/icons";
import {Avatar, Badge, Button, Popover } from "@material-ui/core";
import './Header.scss';
import img1 from './../../image/logo3.png';
import React, { useState } from "react";
import {GoogleLogin, GoogleLogout} from 'react-google-login';




const Header = () => {
   
  window.onload=function(){

    const toggleBtn = document.querySelector('.hala');
    const divList = document.querySelector('.login');

    const dispClick = toggleBtn.addEventListener('click', () => {
        if(divList.style.display === 'none'){
            divList.style.display = 'block';
        }else{
            divList.style.display = 'none';
        }
    });
  } 
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");
    
    const responseGoogle = (response) => {
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        setUrl(response.profileObj.imageUrl);
    };
    
    
    return (
        <div className="nav-bar">
            <div className="App" >
            <GoogleLogin 
                   clientId="559582360124-m9d2i4pq0otud6qh2rlvicd4sa2ovijn.apps.googleusercontent.com"
                   buttonText="Login up"
                   onSuccess= {responseGoogle}
                   onFailure= {responseGoogle}
                   cookiePolicy={'single_host_origin'}
            />
            </div>
            <div className="nav-logo">
                <img src={img1}/>
	        </div>
		    <div className="nav-links">
                <ul><br/> 	
                 <NavLink  to="/"><li><b>HOME</b></li></NavLink>
                 <NavLink  to="/"><li><b>ABOUT</b></li></NavLink>	
                 <NavLink to="*"><li><b>CONTACT US</b></li></NavLink>
		        </ul>
			</div> 
           
            <div className="log" >
               <FontAwesomeIcon className="hala" icon={faUserCircle}  />
                <div className="login">
                    <div className="home__popoverContrainer">
                        <div className="home__popover__top">
                            <img className="ava" src={url}  />
                            <div className="home__text">
                                <div className="home__displayName">
                                    <br/>{name}
                                </div>
                                <div className="home__mail"><br/>{email}</div>
                            </div>

                            <div className="home__popover__btm">
                             <br/>
                                <Button variant="outlined" className="home__singOut"
                                >Sing Out
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	
        
    )
}
export default Header ;