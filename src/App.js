import ContactCard from './ContactCard';
import './App.css';
import React, { Component } from 'react';

class App extends Component {

  state = {
    name: "",
    email: "",
    mobilephone: "",
    cards: []
  }

  submitForm = (e) =>{
    e.preventDefault();
    const card = {
      name: this.state.name,
      email: this.state.email,
      mobilephone: this.state.mobilephone
    }
    const newCards = [...this.state.cards,card];
    this.setState({cards:newCards});
  }

  changeEmail = (e) => {
    this.setState({email:e.target.value});
  }

  changeName = (e) => {
    this.setState({name:e.target.value});
  }

  changePhone = (e) => {
    this.setState({mobilephone:e.target.value});
  }

  render(){
    const result=this.state.cards.map((card, index) => (
      <ContactCard
        name={card.name}
        email={card.email}
        mobilephone={card.mobilephone}
        key={index}
      />
      ))
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={this.submitForm}>
        <label>Name:</label><br></br>
        <input onChange={this.changeName} type="text"></input><br></br>
        <label>Email:</label><br></br>
        <input onChange={this.changeEmail} type="text"></input><br></br>
        <label>Phone:</label><br></br>
        <input onChange={this.changePhone} type="text"></input><br></br>
        <input type="submit" value="Submit" onClick={this.props.changeName}></input>
        </form>
        {result}
      </header>
    </div>
  );
  }
}

export default App;
