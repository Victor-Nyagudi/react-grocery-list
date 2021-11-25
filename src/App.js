import Groceries from './components/Groceries';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groceries: [{
        "id": 1,
        "name": 'Apple Juice',
        "quantity": 5,
        "price": 3.99      
      },
      {
        "id": 2,
        "name": 'Chicken',
        "quantity": 1,
        "price": 5.99      
      },
      {
      "id": 3,
      "name": 'Eggs',
      "quantity": 12,
      "price": 6.49      
      },
      {
        "id": 4,
        "name": 'Cornflakes',
        "quantity": 3,
        "price": 11.72      
      },
      {
        "id": 5,
        "name": 'Milk',
        "quantity": 1,
        "price": 1.99      
      }]
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(itemId) {
    this.setState({ 
      groceries: this.state.groceries
                      .filter(grocery => this.state.groceries.indexOf(grocery) !== itemId) 
    });
  }

  addItem(item) {
    this.setState({ groceries: [...this.state.groceries, item] });
  }

  render() {
    return(
      <Groceries 
          groceries={ this.state.groceries } 
          onDelete={ this.deleteItem } 
          onAdd={ this.addItem }
      />
    );
  }
}


export default App;
