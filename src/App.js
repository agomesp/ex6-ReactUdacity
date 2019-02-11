import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateNewItem from './CreateNewItem.js';
import DeleteLastItem from './DeleteLastItem.js';
import Item from './Item.js';
import ItemList from './ItemList.js';

class App extends React.Component {
	state = {
    	items: []
    }

    deleteLastItem = event => {
      this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
    };

	updateItems = (item) => {
      this.setState(oldState => ({
        items: [...oldState.items, item],
      }));
    }
	
    noItemsFound = () => {
      return this.state.items.length === 0;
    };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <CreateNewItem updateItems={this.updateItems}/>
		<DeleteLastItem deleteLastItem={this.deleteLastItem} noItemsFound={this.noItemsFound()}/>		

        <p className="items">Items</p>
        <ol className="item-list">
          {this.state.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
      </div>
    );
  }
}

export default App;
