import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function genCharacter() {

    return(
        <>
            <h3>Generate Character</h3>
            <button>Re-Roll</button>
        </>
    );
}

export default genCharacter;