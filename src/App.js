import React from 'react';
import './App.css';
import Homepage from './Pages/homepage/homepage.component';
import Shop from './Pages/shop/shop.component.jsx';
import Header from './Components/header/header.component';
import SignInAndRegister from './Pages/sign-in-and-register/sign-in-and-register.component';
import { Switch , Route} from 'react-router-dom';
import {auth} from './firebase/firebase.utils';




class App extends React.Component {

  constructor(){
    super()

    this.state = {
      currentUser : null
    }
  }

   unsubscribeFromAuth = null;

  componentDidMount(){
     this.unsubscribeFromAuth = auth.onAuthStateChanged( user => 

        {
          this.setState({ currentUser : user})
          console.log(user);
        }

        );

  }

  componentDidMount(){
    this.unsubscribeFromAuth();
  }

  render () {
    return(
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
}


export default App;
