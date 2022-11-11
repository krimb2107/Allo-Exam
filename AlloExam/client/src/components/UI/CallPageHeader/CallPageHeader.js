import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUsers, faComment, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import GoogleLogin from 'react-google-login';
import './CallPageHeader.scss';
import { formatDate } from "./../../../utils/helpers";

const CallPageHeader = (
    isMessenger,
    setIsMessenger,
    messageAlert,
    setMessageAlert,
) => {
    let interval = null;
    const [currentTime, setCurrentTime] = useState(() => {
        return formatDate();
    });

    useEffect(() => {
        interval = setInterval(() => setCurrentTime(formatDate()), 1000);
        return () => {
          clearInterval(interval);
        };
      }, []);

    let time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const [ctime, setCtime] = useState(time);
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        setCtime(time);
    };
    setInterval(UpdateTime, 1000);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");
    
    const responseGoogle = (response) => {
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        setUrl(response.profileObj.imageUrl);
    };

    return (
        <div class="frame-header">
            <div class="header-items icon-block">
                <FontAwesomeIcon className="icon" icon={faUsers}  />
            </div> 
            <div class="header-items icon-block" >
                <FontAwesomeIcon className="icon" icon={faComment}  />
                {!isMessenger && messageAlert.alert && (
                    <span className="alert-circle-icon"> </span>
                )}


            </div>
            <div class="header-items time-block">
                <span id="hour" > 
                <h1>{ctime}</h1>
                </span>
            </div>
            <div class="header-items icon-blockri">
              <FontAwesomeIcon className="iconplus" icon={faUserCircle}  />
              <p><br/><br/>karima&nbsp;kandil</p>
            </div>
            
        </div>
        
    )
}
export default CallPageHeader ;