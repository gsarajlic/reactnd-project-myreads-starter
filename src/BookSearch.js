import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import {Link} from 'react-router-dom'

// Search page component displays the list of books matching users input

class BookSearch extends Component {
  state = {
    query: '',
    searchBooks: []
  }

  updateQuery = (query) => {
    this.setState({query: query})
    this.getBooks(query)
  }

  getBooks = (query) => {
    if (query) {
      BooksAPI
        .search(query)
        .then((searchBooks) => {
          if (searchBooks.error) {
            this.setState({searchBooks: []})
          } else {
            this.setState({searchBooks: searchBooks})
          }
        })
    } else {
      this.setState({searchBooks: []})
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">

          <Link to="/" className="close-search">Close
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e) => this.updateQuery(e.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">

          <ol className="books-grid">
            {this
              .state
              .searchBooks
              .map(searchBooks => {
                let shelf = 'none'
                this
                  .props
                  .books
                  .map(book => (book.id === searchBooks.id
                    ? shelf = book.shelf
                    : ''))

                return (
                  <li key={searchBooks.id}>
                    <Book book={searchBooks} move={this.props.move} currentShelf={shelf}/>
                  </li>
                )
              })
}
          </ol>

        </div>
      </div>

    )
  }
}

export default BookSearch