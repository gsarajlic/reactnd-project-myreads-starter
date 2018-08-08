import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import BookSearch from './BookSearch'

class BooksApp extends React.Component {
  state = {
    books : []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  move = (book, shelf) => {
    BooksAPI.update(book, shelf)
    
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">
        {/*<BookShelf 
        books={this.state.books}
        move={this.move}
        />*/}
        <BookSearch
        move={this.move}
        />

      </div>
    )
  }
}

export default BooksApp
