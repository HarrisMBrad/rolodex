import React, { Component } from 'react';
import Scroll from './components/scroll/scroll.component';
import SearchBox from './components/search-box/searchbox.component';
import CardList from './components/card-list/cardlist.component';

import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    //order of execution...
    console.log('constructor');
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>
        response.json())
      .then(users => this.setState({ monsters: users }));
    // when the state updated from what was fetched...
    console.log('componentDidMount');
  }


  /**Remmember, this render method is already provided 
   * we just come above it to make the function component */
  render() {
    // Destructuring the state...
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    // for deveopment...
    console.log('render');
    return (
      <div className="App">
        <h1> A Monsters Rolodex </h1>

        <SearchBox
          placeholder='search monsters'
          handleChange={e =>
            this.setState({ searchField: e.target.value })} />
        <Scroll>
          <CardList monsters={filteredMonsters} />
        </Scroll>

      </div>
    );

  }
}

export default App;
