import React, { Component } from "react";
import "./App.css";
import firebase, { provider } from "../../firebase";

class App extends Component {
  state = { photo: null };

  signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        console.log(user.photoURL);
        this.setState({ photo: user.photoURL });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <header className="App">
        <button onClick={this.signIn}>Login</button>
      </header>
      // <main>
      //   {this.state.photo.}
      // </main>
    );
  }
}

export default App;
