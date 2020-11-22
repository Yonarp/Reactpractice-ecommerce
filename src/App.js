import React from 'react';
import './App.css';
import Homepage from './Pages/homepage/homepage.component';
import Shop from './Pages/shop/shop.component.jsx';
import Header from './Components/header/header.component';
import SignInAndRegister from './Pages/sign-in-and-register/sign-in-and-register.component';
import { Switch , Route} from 'react-router-dom';
import {auth, createUserProfile} from './firebase/firebase.utils';




class App extends React.Component {

  constructor(){
    super()

    this.state = {
      currentUser : null
    }
  }

   unsubscribeFromAuth = null;

   componentDidMount(){
     this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {

      if(user){
        const userRef = await createUserProfile(user);
        userRef.onSnapshot(snapShot => {
          if(snapShot){
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            }
          })
          
        }})

      }
      this.setState({currentUser:user});
      
    }
        );
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render () {
    console.log(this.state);
    return(
    <div>
  <Header currentUser = {this.state.currentUser} />
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
