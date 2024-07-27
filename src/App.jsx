import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faStrikethrough, faAlignLeft, faAlignCenter, faAlignRight, faImage, faPalette, faFont, faUndo, faRedo } from '@fortawesome/free-solid-svg-icons';
import './App.css';

export default function App() {
    const [isBold, setIsBold] = useState(true);

    function handleBold() {
        setIsBold(!isBold);

        if (isBold) {
            document.getElementById('bold').classList.add('clicked');
        } else {
            document.getElementById('bold').classList.remove('clicked');
        }
    }

    return (
        <div className='editor-container'>

            <div className="editor-header">
                <h1>Elegant Text Editor</h1>
            </div>

            <div className="toolbar">

                <div className="toolbar-group">
                    <button id='bold' className="tool-button" onClick={handleBold}><FontAwesomeIcon icon={faBold} /></button>
                    <button id='italic' className="tool-button"><FontAwesomeIcon icon={faItalic} /></button>
                    <button id='strike' className="tool-button"><FontAwesomeIcon icon={faStrikethrough} /></button>
                </div>

                <div className="toolbar-group">
                    <button id='h1' className="tool-button"><strong>H1</strong></button>
                    <button id='h2' className="tool-button"><strong>H2</strong></button>
                    <button id='h3' className="tool-button"><strong>H3</strong></button>
                </div>

                <div className="toolbar-group">
                    <button id='leftAllign' className="tool-button"><FontAwesomeIcon icon={faAlignLeft} /></button>
                    <button id='centerAllign' className="tool-button"><FontAwesomeIcon icon={faAlignCenter} /></button>
                    <button id='rightAllign' className="tool-button"><FontAwesomeIcon icon={faAlignRight} /></button>
                </div>

                <div className="toolbar-group">
                    <button id='img' className="tool-button"><FontAwesomeIcon icon={faImage} /></button>
                    <button id='color' className="tool-button"><FontAwesomeIcon icon={faPalette} /></button>
                    <button id='font' className="tool-button"><FontAwesomeIcon icon={faFont} /></button>
                </div>

                <div className="toolbar-group">
                    <button id='undo' className="tool-button"><FontAwesomeIcon icon={faUndo} /></button>
                    <button id='redo' className="tool-button"><FontAwesomeIcon icon={faRedo} /></button>
                </div>

            </div>

            <div className="editor-content">
                <textarea id='area' className='text-area' placeholder='Express your thoughts here...'></textarea>
            </div>

        </div>
    );
}