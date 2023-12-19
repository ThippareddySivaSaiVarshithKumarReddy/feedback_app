import './index.css'

import {Component} from 'react'

class Feedback extends Component {
  state = {isClicked: false}

  clickedEmoji = () => {
    this.setState(prevState => ({
      isClicked: prevState.isClicked ? !prevState : prevState,
    }))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isClicked} = this.state
    return (
      <div className="app-container">
        {isClicked ? (
          <div className="thankyou-container">
            <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
            <h1 className="thank-you-text">Thank You!</h1>
            <p className="thank-you-response">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        ) : (
          <div className="feedback-container">
            <h1 className="feedback-question">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emojis-container">
              {emojis.map(eachresource => {
                const {imageUrl, name, id} = eachresource
                return (
                  <li key={id} className="each-emoji-container">
                    <img
                      src={imageUrl}
                      alt={name}
                      className="emoji-img"
                      onClick={this.clickedEmoji}
                    />
                    <p className="emoji-name">{name}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
