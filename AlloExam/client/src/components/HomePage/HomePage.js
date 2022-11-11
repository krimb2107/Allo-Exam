import { useHistory } from "react-router-dom" ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faList, faSearch } from "@fortawesome/free-solid-svg-icons";
import  shortid from "shortid";
import Header from './../UI/Header/Header';
import img2 from './../image/visiocon.png';

import './HomePage.scss';
const HomePage = () => {
    const history = useHistory();
    
    const startCall = () => {
        //generate unique id
        const uid = shortid.generate();
        //redirect to callpage
        history.push(`/${uid}#init`);
    }

    const startRemote = () => {
        //redirect to another domaine
        window.location.replace("http://192.168.1.8:5000/view");
    }

    return (
        <div className=" arriere-plan">
            <Header />
            <div className="banner-title">
                <div className="feature">
                    <h1>Welcome to <span>allo exam</span></h1><br/>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp; Passer vos examens en ligne, en toute crédibilité et honnêteté,<br/>
                    avec la possibilité de la surveillance  totale  des participants accorder <br/>au tuteur ,comme 
                    si ça se passe en présentiel.</p>
                    <button type="button" className="btn" onClick={startCall}>
                        Démarrer une réunion
                    </button>
                    <br/><br/>
                </div>
                <div className="vertical-bar">
                    <div className="search-icon"><br/><br/>
                        <FontAwesomeIcon icon={faList}  />
                        <br/><br/>
                        <FontAwesomeIcon icon={faSearch}  />
                    </div>
                    <div className="social-icons">  
                    </div>
                </div>
                <img  src={img2} />
            </div>
        </div>
    )
}
export default HomePage;