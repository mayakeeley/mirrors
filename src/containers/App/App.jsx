import React, { Component } from "react";
import "./App.css";
import firebase, { provider } from "../../firebase";

class App extends Component {
  state = { photos: [], name: null };

  signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        console.log(user.displayName);
        this.setState({
          photos: [user.photoURL, user.photoURL, user.photoURL, user.photoURL],
          name: user.displayName
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <header className="App">
          <button onClick={this.signIn}>Login</button>
        </header>
        <main>
          {this.state.photos.map((photo, index) => {
            return <img src={photo} alt="face" key={index} />;
          })}
        </main>
      </>
    );
  }
}

export default App;
