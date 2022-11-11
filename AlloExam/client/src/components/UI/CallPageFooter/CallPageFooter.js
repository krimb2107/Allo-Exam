import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDesktop, faEllipsisH,faVideo, faPhoneSlash, faMicrophone, faCloudUploadAlt, faEllipsisV, faFilePdf, faEdit, faImages, faFileImport, faMicrophoneSlash } from "@fortawesome/free-solid-svg-icons";
import './CallPageFooter.scss';
import { Link } from "react-router-dom";

const CallPageFooter = ({
    isPresenting,
    stopScreenShare,
    screenShare, 
    isAudio,
    toggleAudio,
    disconnectCall,
}) => { 
    const isAdmin = window.location.hash == "#init" ? true : false;
    const startRemote = () => {
        //redirect to another domaine
        window.location.replace("http://192.168.0.180:5000/view");
    }
    return (
        <div className="footer-item">
            <div className="left-item">
              {isAdmin && (
                <div className= "icon-block" onClick={startRemote}>
                    <FontAwesomeIcon className="icon" icon={faDesktop}  /> 
                    <FontAwesomeIcon className="icon" icon={faEllipsisH}/> 
                    <FontAwesomeIcon className="icon" icon={faDesktop}/> 
                    <br/><br/><p className="title"><br/><br/>Controller les écrans par id</p> 
                </div>
              )}
            </div>

            <div className="center-item">
                <div className={`icon-block ${!isAudio ? "red-bg" : null}`} onClick={() => toggleAudio(!isAudio)}>
                    <FontAwesomeIcon className="icon" icon={isAudio ? faMicrophone : faMicrophoneSlash}  />
                </div>
                <div className="icon-block"  onClick={disconnectCall}>
                    <FontAwesomeIcon className="icon red" icon={faPhoneSlash}  />
                    
                   
                </div>
                <div className="icon-block">
                    <FontAwesomeIcon className="icon" icon={faVideo}  />
                </div>
            </div>

            <div className="right-item">
                {isPresenting ? (
                    <div className="icon-block" onClick={stopScreenShare}>
                    <FontAwesomeIcon className="icon red" icon={faCloudUploadAlt}  />
                     <p className="title">Stoper le partage</p>
                </div>

                ) : (
                    <div className="icon-block" onClick={screenShare}>
                        <FontAwesomeIcon className="icon red" icon={faCloudUploadAlt}  />
                         <p className="title">partager mainteant</p>
                    </div>
                )}
                
                   
                
                
                <div className="icon-block">
                    <FontAwesomeIcon className="icon red" icon={faEllipsisV}  />
                    <div class="option">
                        <a href="#"><FontAwesomeIcon className="icon" icon={faFilePdf}/>  Importer l'énonce (pdf)</a>
                        <a href="#"><FontAwesomeIcon className="icon" icon={faImages}/>  Capturer</a><hr/>
                        <a href="#"><FontAwesomeIcon className="icon" icon={faFilePdf}/>  Ouvrir l'enoncé de l'exam</a>
                        <a href="#"><FontAwesomeIcon className="icon" icon={faFileImport}/>  Remettre l'exam</a>
                    </div>
                
                </div>
            </div>
            
        </div>
    
       
	
        
    );
};
export default CallPageFooter ;