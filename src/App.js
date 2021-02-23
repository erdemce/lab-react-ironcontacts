import React, { Component } from 'react'
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./components/Contact";

export default class App extends Component {

  state = {
    onSite: contacts.slice(0, 5),
  };

  handleAddContact=()=>{
      let randomIndex = Math.floor(Math.random() * contacts.length);
      let randomContact = contacts[randomIndex];
      this.setState({
      onSite: [...this.state.onSite, randomContact],
    });
  }

  handleSortByName=()=>{
    let cloned = JSON.parse(JSON.stringify(this.state.onSite));
    cloned.sort((first, second) => {
      if (first.name > second.name) {
        return 1;
      } else if (first.name < second.name) {
        return -1;
      } else {
        return 0;
      }
    });

    this.setState({
      onSite: cloned,
    });
  };

  handleSortByPopularity=()=>{
    let cloned = JSON.parse(JSON.stringify(this.state.onSite));
    cloned.sort((first, second) => second.popularity - first.popularity);

    this.setState({
      onSite: cloned,
    });
  };

  handleDelete=(id)=>{
    this.setState({
      onSite: this.state.onSite.filter((cnt) => cnt.id !== id),
    });

  }


    render() {
        return (
            <div className="App">


    <button onClick={this.handleAddContact}>Add Random</button>
    <button onClick={this.handleSortByName}>Sort By Name</button>
    <button onClick={this.handleSortByPopularity}>Sort by Popularity</button>
       


      <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr></thead>
        <tbody>

        {this.state.onSite.map((cnt,index) => {
          return (
            <Contact key= {index} cnt={cnt} onDelete={this.handleDelete}/>
          );
        })}
        </tbody>
      </table>
    </div>
        )
    }
}
