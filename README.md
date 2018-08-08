# MyReads Project

This app allows you to keep track of your reading.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Backend Server](#backend-server)
- [Credits](#credits)

## Description

On the main page, you'll find three bookshelves, one for the books you're
currently reading, one for the books you're planning to read, and one for the
books you've already read.

There is also a search function that allows you to search for new books to add
to your shelves and, of course, you can move your books from one shelf to
another whenever you need.

## Installation

To run the project:

* Clone or download MyReads repository 
(my repository - https://github.com/gsarajlic/reactnd-project-myreads-starter.git
udacity original repository - https://github.com/udacity/reactnd-project-myreads-starter.git)
* On the terminal or command line install NPM with `npm install` to install all dependencies
* Type `npm start` to launch the app on your localhost:3000 port

## Backend Server

The project includes a backend server provided by Udacity. The file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on
the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of
book objects.
* This collection represents the books currently in the bookshelves of the app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"] 
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a
maximum of 20 book objects.

## Credits
The starter code for this project was provided by [Udacity](https://github.com/udacity/reactnd-project-myreads-starter).

This project was built with help of Study Jam which Maeva NAP made to help all Udaicans, Thank you Maeva !

