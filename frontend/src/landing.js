import React, {Component} from 'react';
import logo from './svg/airbnblogo.png';
import './landing.css';
import TopBar from './topbar/topbar.js';
import {Button} from 'reactstrap';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey: "AIzaSyAE1dktWDHE2xl9jHA_9B75c2wyBJhFGuI",
  authDomain: "airbnbpriceprediction.firebaseapp.com"
})

class Login extends React.Component {

  state = {isSignedIn: false}

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user})
      console.log("user", user)
    })
  }

  render(){
    return(
      <div className="Landing">
        <div className="Landing-header">
              {/*<h1 className="display-5">Yuki Login</h1>*/}
              {this.state.isSignedIn ?
              (
              <div className="header-buttons">
                  <div>
                    <h1 className="display-4">Welcome {firebase.auth().currentUser.displayName}</h1>
                    <img alt="profile picture" src={firebase.auth().currentUser.photoURL} />
                  </div>

                  <div className="predict-signout">
                    <Button onClick={() => firebase.auth().signOut()}>Sign out!</Button>
                  </div>

                  <div className="predict-next">
                    <a href='/results'><Button> Predict! </Button></a>
                  </div>

              </div>
              )
              :
              (
                <div>
                  <h5 className="display-5">Login with your preferred method!</h5>
                  <StyledFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebase.auth()}
                  />
                </div>
              )
              }
        </div>
      </div>
    )
  }

}

function Landing() {
  return (
    <div>
      <div>
        <TopBar />
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
}

export default Landing;

{/*
  <div className="Landing">
    <header className="Landing-header">
      <img src={logo} className="Landing-logo" alt="logo" />
      <p>
        Edit <code>src/landing.js</code> and save to reload.
      </p>
      <a
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
  */}
