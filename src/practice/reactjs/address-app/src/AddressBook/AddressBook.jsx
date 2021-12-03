import React, { Component } from "react";

class BookShelf extends Component {
  render() {
    // console.log(this.props.books)

    const returnBooks = (items, shelf) => {
      const books = items.filter(i => i.shelf === shelf)

      return books && books.map(book => <div className="bookshelf-books">
      <ol className="books-grid">
        <li>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${book.imageList})`,
                }}
              />
              <div className="book-shelf-changer">
                <select
                //   value={this.state.value}
                //   onChange={this.handleChange}
                >
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">
                    Currently Reading
                  </option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        </li>
      </ol>
    </div>)
    }

    return (
      <div>
        <div className="bookshelf">  
            <h2 className="bookshelf-title">Currently Reading</h2>
            {
              returnBooks(this.props.books, "currentlyReading")
            }
        </div>
        <div className="bookshelf">  
            <h2 className="bookshelf-title">Want To Read</h2>
            {
              returnBooks(this.props.books, "wantToRead")
            }
        </div>
        <div className="bookshelf">  
            <h2 className="bookshelf-title">Read</h2>
            {
              returnBooks(this.props.books, "read")
            }
        </div>
      </div>
    );
  }
}
export default BookShelf;
