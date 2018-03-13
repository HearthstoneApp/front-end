import React, { Component } from 'react';
import _ from 'lodash';

export default class PreviewPane extends Component {
  constructor(props) {
    super(props);

    this.getCardListElements = this.getCardListElements.bind(this);
    this.selectResult = this.selectResult.bind(this);

    this.state = { selectedCard: null };
  }

  componentDidMount() {
    const { cards } = this.props;
    const selectedCard = _.head(cards);
    this.selectResult(selectedCard);
  }

  getCardListElements() {
    const { cards } = this.props;
    return cards.map(card => {
      return (<button href="#" key={card.cardId} onClick={() => this.selectResult(card)}>{card.name}</button>);
    });
  }

  selectResult(selectedCard) {
    this.setState({ selectedCard });
    this.props.selectResult(selectedCard);
  }

  render() {
    return (
      <div className="preview-card card">
        <div className="panel-heading">
          <h1>Preview</h1>
          <hr />
        </div>
        <div className="selection-preview">
          {this.state.selectedCard && <img src={this.state.selectedCard.img} alt="" />}
        </div>
        <div className="search-results">
          {this.getCardListElements()}
        </div>
      </div>
    );
  }
}
