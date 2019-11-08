import React, { Component } from "react";
import "./App.css";
import firebase, { provider } from "../../firebase";
import Images from "../Images";

class App extends Component {
  state = { photo: null, name: null };

  signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        this.setState({
          photo: user.photoURL,
          name: user.displayName
        });
      });
  };

  render() {
    return (
      <>
        <header className="App">
          <button onClick={this.signIn}>Login</button>
        </header>
        <main>
          <Images photo={this.state.photo} name={this.state.name} />
        </main>
      </>
    );
  }
}

export default App;
