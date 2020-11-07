import React from 'react';
import './App.css';
import Homepage from './Pages/homepage/homepage.component';
import { Switch , Route} from 'react-router-dom';


const HatsPage = () => (
  <div>
    <h1>Hats here sold where</h1>
  </div>
);

function App() {
  return (
    <div>
     <Switch>
        <Route exact path = '/' component={Homepage}/>
        <Route path = '/hats' component={HatsPage}/>
     </Switch>
    </div>
  );
}

export default App;
