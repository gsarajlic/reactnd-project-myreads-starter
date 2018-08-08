import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import BookSearch from './BookSearch'

class BooksApp extends React.Component {
  state = {
    books : []
    //showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books)=> {
      this.setState({ books })
    })
  }


  render() {
    
    return (
      <div className="app">
        <BookShelf 
        books={this.state.books}
        />

      </div>
    )
  }
}

export default BooksApp
