import React,{useCallback,useState} from 'react'
import Home from './pages/Home';
import Game from './pages/Game';


import{BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {
  const [name, setName] = useState('');

  const callBack = useCallback((name) => { setName(name); console.log(name); },[])


  return (
    <Router>
      <div>
        <Switch>

          <Route path='/' exact>
            <Home parentCall={callBack}/>
          </Route>

          <Route path='/game'>
            <Game who={ name }/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;