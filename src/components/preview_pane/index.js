import React from 'react';

export default function PreviewPane({ cards }) {
  function getCardList() {
    return cards.map(card => <li>{card.name}</li>);
  }

  return (
    <ul>
      {getCardList()}
    </ul>
  );
}
