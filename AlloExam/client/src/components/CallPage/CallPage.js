
import { useEffect, useReducer, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {getRequest, postRequest} from "./../../utils/apiRequests";
import {BASE_URL, GET_CALL_ID, SAVE_CALL_ID} from "./../../utils/apiEndpoints";
import io from "socket.io-client";
import CallPageHeader from './../UI/CallPageHeader/CallPageHeader';
import CallPageFooter from './../UI/CallPageFooter/CallPageFooter';
import MeetingInfo from './../UI/MeetingInfo/MeetingInfo';
import Messenger from './../UI/Messenger/Messenger';
import MessageListReducer from './../../reducers/MessageListReducer';
import Peer from 'simple-peer';


import './CallPage.scss';

let peer = null;
const socket = io.connect("http://localhost:3002");
const initialState = [];



const CallPage = () => {
    const histoty = useHistory();
    let { id } = useParams();
    const isAdmin = window.location.hash == "#init" ? true : false;
    const url = `${window.location.origin}${window.location.pathname}`;
    let alertTimeout = null;

    const [messageList, messageListReducer] = useReducer(
        MessageListReducer,
        initialState
    );

    const [streamObj, setStreamObj] = useState();
    const [screenCastStream, setScreenCastStream] = useState();
    const [meetInfoPopup, setMeetInfoPopup] = useState(false);
    const [isPresenting, setIsPresenting] = useState(false);
    const [isMessenger, setIsMessenger] = useState(false);
    const [messageAlert, setMessageAlert] = useState({});
    const [isAudio, setIsAudio] = useState(true);

    useEffect(() => {
        if(isAdmin){
            setMeetInfoPopup(true);
        }
        initWebRTC();
        socket.on("code", (data) => {
            peer.signal(data);
        });
    }, []);

    
      
      
    
 

    const initWebRTC = () => {
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
        })
        .then((stream) => {
            setStreamObj(stream);

            peer = new Peer({
                initiator: isAdmin,
                trickle: false,
                stream: stream,
            });

            /*if(!isAdmin){
                getReciverCode();
            }*/

            peer.on("signal", async (data) => {
                if(isAdmin){
                    let payload = {
                        id,
                        signalData: data,
                    };
                    await postRequest(`${BASE_URL}${SAVE_CALL_ID}`,payload);
                }else{
                    socket.emit("code", data, (cbData) => {
                        console.log("code sent");
                    });
                }
            });

            peer.on("connect", () => {
                //console.log('peer connected');
            });

            peer.on("stream", (stream) => {
                let video = document.querySelector("video");
                if("srcObject" in video){
                    video.srcObject = stream;
                }else{
                    video.src = window.URL.createObjectURL(stream);
                }

                video.play();
            });
        })
        .catch(() => {
            console.log("error");});
    };

    const sendMsg = (msg) => {
        peer.send(msg);
        messageListReducer({
          type: "addMessage",
          payload: {
            user: "you",
            msg: msg,
            time: Date.now(),
          },
        });
    };

    const screenShare = () => {
        navigator.mediaDevices.getDisplayMedia({ cursor: true })
        .then((screenStream) => {
            peer.replaceTrack(
                streamObj.getVideoTracks()[0],
                screenStream.getVideoTracks()[0],
                streamObj
            );
            setScreenCastStream(screenStream);
            screenStream.getTracks()[0].onended = () =>{
                peer.replaceTrack(
                    screenStream.getVideoTracks()[0],
                    streamObj.getVideoTracks()[0],
                    streamObj
                );
            };
            setIsPresenting(true);
        });
    };

    const stopScreenShare = () => {
        screenCastStream.getVideoTracks().forEach(function (track) {
          track.stop();
        });
        peer.replaceTrack(
          screenCastStream.getVideoTracks()[0],
          streamObj.getVideoTracks()[0],
          streamObj
        );
        setIsPresenting(false);
    };

    const toggleAudio = (value) => {
        streamObj.getAudioTracks()[0].enabled = value;
        setIsAudio(value);
    };
    
    const disconnectCall = () => {
        //peer.destroy();
        // eslint-disable-next-line no-restricted-globals
        histoty.push( `/`);
        window.location.reload();
    };

    return (
        <div id="video-grid">
            <video id="localVideo" controls autoPlay></video>
            &nbsp;
            <video id="localVideo" controls autoPlay></video>
            

            <CallPageHeader
                isMessenger={isMessenger} 
                setIsMessenger={setIsMessenger} 
                messageAlert={messageAlert} 
                setMessageAlert={setMessageAlert}
            />
            <CallPageFooter
                isPresenting={isPresenting} 
                stopScreenShare={stopScreenShare} 
                screenShare={screenShare}
                isAudio={isAudio}
                toggleAudio={toggleAudio}
                disconnectCall={disconnectCall} 
            />
            {isAdmin && meetInfoPopup && ( <MeetingInfo setMeetInfoPopup={setMeetInfoPopup} url={url} /> )}
            
            
            <Messenger  />
           
            
        </div>
    )
}
export default CallPage;