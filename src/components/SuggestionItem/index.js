import './index.css'

const SuggestionItem = props => {
  const {suggestionsData, searchSuggestion} = props
  const {suggestion} = suggestionsData

  const onClickSuggestion = () => {
    searchSuggestion(suggestion)
  }
  return (
    <li className="list">
      <div className="suggestion-item">
        <p className="suggestion">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-icon"
          alt="arrow"
          onClick={onClickSuggestion}
        />
      </div>
    </li>
  )
}
export default SuggestionItem
