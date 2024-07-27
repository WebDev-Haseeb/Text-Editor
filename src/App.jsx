import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBold, faItalic, faStrikethrough, faAlignLeft, faAlignCenter, faAlignRight, faImage, faPalette, faFont } from '@fortawesome/free-solid-svg-icons';
import './App.css';

export default function App() {
    return (
        <div className='container'>

            <div className="options">
                <FontAwesomeIcon icon={faBold} />
                <FontAwesomeIcon icon={faItalic} />
                <FontAwesomeIcon icon={faStrikethrough} />
                <FontAwesomeIcon icon={faAlignLeft} />
                <FontAwesomeIcon icon={faAlignCenter} />
                <FontAwesomeIcon icon={faAlignRight} />
                <FontAwesomeIcon icon={faImage} />
                <FontAwesomeIcon icon={faPalette} />
                <FontAwesomeIcon icon={faFont} />
            </div>

            <div className='line'></div>

            <div className="textContainer">
                <textarea className='textArea' placeholder='Enter your text here...'></textarea>
            </div>

        </div>
    );
}