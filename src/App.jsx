import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faStrikethrough, faAlignLeft, faAlignCenter, faAlignRight, faImage, faPalette, faFont, faUndo, faRedo } from '@fortawesome/free-solid-svg-icons';
import './App.css';

export default function App() {
    return (
        <div className='editor-container'>

            <div className="editor-header">
                <h1>Elegant Text Editor</h1>
            </div>

            <div className="toolbar">

                <div className="toolbar-group">
                    <button className="tool-button"><FontAwesomeIcon icon={faBold} /></button>
                    <button className="tool-button"><FontAwesomeIcon icon={faItalic} /></button>
                    <button className="tool-button"><FontAwesomeIcon icon={faStrikethrough} /></button>
                </div>

                <div className="toolbar-group">
                    <button className="tool-button"><strong>H1</strong></button>
                    <button className="tool-button"><strong>H2</strong></button>
                    <button className="tool-button"><strong>H3</strong></button>
                </div>

                <div className="toolbar-group">
                    <button className="tool-button"><FontAwesomeIcon icon={faAlignLeft} /></button>
                    <button className="tool-button"><FontAwesomeIcon icon={faAlignCenter} /></button>
                    <button className="tool-button"><FontAwesomeIcon icon={faAlignRight} /></button>
                </div>

                <div className="toolbar-group">
                    <button className="tool-button"><FontAwesomeIcon icon={faImage} /></button>
                    <button className="tool-button"><FontAwesomeIcon icon={faPalette} /></button>
                    <button className="tool-button"><FontAwesomeIcon icon={faFont} /></button>
                </div>

                <div className="toolbar-group">
                    <button className="tool-button"><FontAwesomeIcon icon={faUndo} /></button>
                    <button className="tool-button"><FontAwesomeIcon icon={faRedo} /></button>
                </div>

            </div>

            <div className="editor-content">
                <textarea className='text-area' placeholder='Express your thoughts here...'></textarea>
            </div>

        </div>
    );
}