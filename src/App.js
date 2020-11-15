import React from 'react';
import './App.css';
import Homepage from './Pages/homepage/homepage.component';
import Shop from './Pages/shop/shop.component.jsx';
import Header from './Components/header/header.component';
import SignInAndRegister from './Pages/sign-in-and-register/sign-in-and-register.component';
import { Switch , Route} from 'react-router-dom';


function App() {
  return (
    <div>
  <Header></Header>
     <Switch>
        <Route exact path = '/' component={Homepage}/>
        <Route path = '/shop' component={Shop}/>
        <Route path = '/signin' component={SignInAndRegister}/>
     </Switch>
    </div>
  );
}

export default App;
