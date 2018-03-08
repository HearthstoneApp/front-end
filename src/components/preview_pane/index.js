import React from 'react';

export default function PreviewPane({ cards }) {
  function getCardList() {
    return cards.map(card => <li key={card.name}>{card.name}</li>);
  }

  return (
    <div className="preview-card card">
      <div className="panel-heading">
        <h1>Preview</h1>
        <hr />
      </div>
      <ul>
        {getCardList()}
      </ul>
    </div>
  );
}
