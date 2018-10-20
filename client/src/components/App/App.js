import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import BooksList from '../BooksList/BooksList';
import Book from '../Book/Book';
import BookNew from '../BookNew/BookNew';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <div>
                  <header className="App-header">
                      Books Inventory
                  </header>
                  <Switch>
                      <Route path="/books/new" component={BookNew} />
                      <Route path="/books/:id" component={Book} />
                      <Route path="/" component={BooksList} />
                  </Switch>
              </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
