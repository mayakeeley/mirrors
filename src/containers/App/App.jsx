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
    const text = this.state.photo ? (
      <p>Click on each face to see what happens!</p>
    ) : (
      <button onClick={this.signIn}>Login</button>
    );
    return (
      <>
        <header className="App">
          <h1>Hall of Mirrors</h1>
        </header>
        <main>
          <Images photo={this.state.photo} name={this.state.name} />
          <div>{text}</div>
        </main>
      </>
    );
  }
}

export default App;
