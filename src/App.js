import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import BookSearch from './BookSearch'
import {Route} from 'react-router-dom'

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
