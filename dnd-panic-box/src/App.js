import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import genCharacter from './genCharacter';


function App() {
  return (
    <Router>
      <header>
        <h1>D&D Panic Box</h1>
        <h3>What did you not prepare for?</h3>
      </header>
      <body>
        <Switch>
          <Route path='/'>
            <ul>
              <li><button>Generate NPC</button></li>
              <li><button>Generate Location</button></li>
              <li><button>Generate Item</button></li>
            </ul>
          </Route>
          <Route path='/generateCharacter'>
            <genCharacter />
          </Route>
        </Switch>
        
      </body>
    </Router>
  );
}

export default App;