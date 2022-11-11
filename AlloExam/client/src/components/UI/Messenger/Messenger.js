import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes, faUserFriends, faCommentAlt, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import './Messenger.scss';
import { formatDate } from "./../../../utils/helpers";

const Messenger = ({ setIsMessenger, sendMsg, messageList }) => {
    const [msg, setMsg] = useState("");
    const handleChangeMsg = (e) => {
      setMsg(e.target.value);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        sendMsg(msg);
        setMsg("");
      }
    };

    const handleSendMsg = () => {
      sendMsg(msg);
      setMsg("");
    };


    return (
      <div className="messenger-container">
        <div className="messenger-header">
          <h3>Information sur la réunion</h3>
        </div>

        <div className="messenger-header-tabs">
          <div className="tab">
            <FontAwesomeIcon className="icon" icon={faUserFriends}  />
            <p>People(1)</p>
          </div>
          <div className="tab active">
            <FontAwesomeIcon className="icon" icon={faCommentAlt}  />
            <p>Chat</p>
          </div>
        </div>
        <div className="chat-section">
          <div className="chat-block">
            <div className="sender">
              you <small>10PM</small>
            </div>
            <p className="msg">Here comes a actual msg</p>
          </div> 
        </div>

        <div class="send-msg-section">
          <input placeholder="Send a message to everyone"/>
          <FontAwesomeIcon className="icon" icon={faPaperPlane}  />
        </div>

        
      </div>
        
    )
}
export default Messenger ;