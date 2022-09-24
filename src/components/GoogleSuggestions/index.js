import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  searchSuggestion = (suggestion) =>{
      this.setState({searchInput:suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const filterSearchedInput = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="google-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-icon"
            alt="google logo"
          />
          <div className="input-suggestions-container">
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-icon"
                alt="search icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="input-box"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
            <ul>
              {filterSearchedInput.map(eachItem => (
                <SuggestionItem suggestionsData={eachItem} key={eachItem.id} searchSuggestion = {this.searchSuggestion}/>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
