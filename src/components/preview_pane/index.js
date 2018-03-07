import React from 'react';

export default function PreviewPane({ cards }) {
  function getCardList() {
    return cards.map(card => <li key={card.name}>{card.name}</li>);
  }

  return (
    <div className="pane">
      <ul>
        {getCardList()}
      </ul>
    </div>
  );
}
