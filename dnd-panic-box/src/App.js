import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import genCharacter from './genCharacter';


function App() {
  return (
    <>
      <header>
        <h1>D&D Panic Box</h1>
        <h3>What did you not prepare for?</h3>
      </header>
      <body>
        <ul>
          <li><button>Generate NPC</button></li>
          <li><button>Generate Location</button></li>
          <li><button>Generate Item</button></li>
        </ul>
        
      </body>
    </>
  );
}

export default App;