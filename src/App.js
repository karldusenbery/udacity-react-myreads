import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelves from './components/Shelves'
import Search from './components/Search'
import SearchButton from './components/SearchButton'
import Header from './components/Header'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  updateSearchPageState = state => {
    this.setState({ showSearchPage: state })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          // This is where the Search component is accessed.
          <Search showSearchPage={this.updateSearchPageState}/>
        ) : (
          <div className="list-books">
            {/*  This is where the Header component is displayed*/}
            <Header/>

            {/*  This is where the Shelves component is displayed */}
            <Shelves/>
            

            {/*  This is where the SearchButton component is displayed and accessed*/}
            <SearchButton showSearchPage={this.updateSearchPageState}/>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
