import Header from './../UI/Header/Header';
import {Link} from 'react-router-dom';
import './NoMatch.scss';
const NoMatch = () => {
    return (
        <div className="no-match">
            <Header/><br/><br/><br/>
            <div className="no-match__content">
                <h2>Le nom de la réunion est invalide.</h2>
                <div className="action-btn"><br/><br/>
                    <Link className="btn green" to="/">
                        Retournez-vous à la page d'acceuil
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default NoMatch;