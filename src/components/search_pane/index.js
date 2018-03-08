import React from 'react';
import InputMenu from '../input_menu';

export default function SearchPane({
  onNameFilter,
  onSetFilter,
  filterNameQuery,
  filterSetQuery
}) {
  return (
    <div className="search-card card">
      <div className="panel-heading">
        <h1>Search</h1>
        <hr />
      </div>
      <div className="input-label">Name:</div>
      <InputMenu
        placeholder="Card Name"
        onChange={event => onNameFilter(event.target.value)}
        value={filterNameQuery}
      />
      <div className="input-label">Card Set:</div>
      <InputMenu
        placeholder="Card Set"
        onChange={event => onSetFilter(event.target.value)}
        value={filterSetQuery}
      />
    </div>
  );
}
