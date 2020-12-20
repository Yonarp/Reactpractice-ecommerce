import React from 'react';
import './App.css';
import Homepage from './Pages/homepage/homepage.component';
import Shop from './Pages/shop/shop.component.jsx';
import Header from './Components/header/header.component';
import SignInAndRegister from './Pages/sign-in-and-register/sign-in-and-register.component';
import { Switch , Route , Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/users.actions';
import {auth, createUserProfile} from './firebase/firebase.utils';


class App extends React.Component {

  unsubscribeFromAuth = null;
  
  componentDidMount(){
     const {setCurrentUser} = this.props;
     this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {

      if(user){
        const userRef = await createUserProfile(user);
        userRef.onSnapshot(snapShot => {
          if(snapShot){
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
          })
          
        }})

      }
      setCurrentUser(user);
      
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
  <Header/>
     <Switch>
        <Route exact path = '/' component={Homepage}/>
        <Route path = '/shop' component={Shop}/>
        <Route exact path = '/signin' render={() => (this.props.currentUser ? (<Redirect to='/'/>): (<SignInAndRegister/>) )}/>
     </Switch>
    </div>
    
    );
}
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
