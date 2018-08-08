import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import BookSearch from './BookSearch'
import {Route} from 'react-router-dom'

// Main component of the application
// Tracks books to be on the right shelf and move books from one to other shelf
// Implement routing
class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI
      .getAll()
      .then((books) => {
        this.setState({books: books})
      })
  }

  move = (book, shelf) => {
    BooksAPI.update(book, shelf)

    BooksAPI
      .getAll()
      .then((books) => {
        this.setState({books: books})
      })
  }

  render() {
    return (
      <div className="app">

        <Route
          exact
          path="/"
          render={() => (<BookShelf books={this.state.books} move={this.move}/>)}/>

        <Route
          exact
          path="/BookSearch"
          render={() => (<BookSearch move={this.move} books={this.state.books}/>)}/>

      </div>
    )
  }
}

export default BooksApp
