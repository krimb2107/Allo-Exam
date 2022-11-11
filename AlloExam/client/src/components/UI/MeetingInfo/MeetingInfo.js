import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes, faFileExcel, faPaperPlane, faCopy, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import './MeetingInfo.scss';

const MeetingInfo = ({setMeetInfoPopup, url}) => {
    return (
      <div className="meeting-info-block">
        <div className="meeting-header">
          <h3>&nbsp; &nbsp;Votre réunion est désormais prêtes</h3>
          <FontAwesomeIcon className="icon" icon={faTimes} onClick={() => {
            setMeetInfoPopup(false);
          }} />
        </div>
        <p className="info-text"><br/>
          <b>Importer une liste des étudiants (fichier Excel) contenante 2 champs:</b><br/> &nbsp; &nbsp;
            Nom complet et l'adresse gmail.<br/><br/>
            <b>NB: l'extension du fichier doit absolument être:</b>  &nbsp; &nbsp; &nbsp; <i>CSV (Comma delimited)(*.csv)</i>, 
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;<b>ou bien</b> <br/>
            &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;<i>CSV UTF-8 (délimité par des virgules)</i>.
        </p>
        <form  method="POST" name="uploadCsv" enctype="multipart/form-data">
          <button className="add-people-btn">
            <FontAwesomeIcon className="icon" icon={faFileExcel}  />
            <input type="file"  name="file" accept=".csv"/> 
          </button>
          <div className="Envoyer">
	          <input type="submit" name="envoyer" value="Envoyer" />
	          <FontAwesomeIcon className="icon" icon={faPaperPlane}  />
          </div>
        </form>
        <p className="info-text"><br/>
          <FontAwesomeIcon className="icon" icon={faShieldAlt}  />
          <b>   Ou bien partager ce lien avec vos étudiants pour qu'il puissent rejoindre la réunion.</b>
        </p><br/>
        <div className="meet-link">
          <span>{url}</span>
          <FontAwesomeIcon className="icon" icon={faCopy} onClick={() => navigator.clipboard.writeText(url)} />
        </div>  
      </div>
       
    )
}
export default MeetingInfo ;