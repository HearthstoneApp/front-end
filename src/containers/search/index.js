import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import InputMenu from '../../components/input_menu';

function Search(props) {
  const { filters } = props;
  return (
    <div>
      <div className="input-label">Name:</div>
      <InputMenu
        placeholder="Card Name"
        onChange={event => props.onNameFilter(event.target.value)}
        value={filters.filterNameQuery}
      />
      <div className="input-label">Card Set:</div>
      <InputMenu
        placeholder="Card Set"
        onChange={event => props.onSetFilter(event.target.value)}
        value={filters.filterSetQuery}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    filters: state.filters
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNameFilter: bindActionCreators(actions.filterName, dispatch),
    onSetFilter: bindActionCreators(actions.filterSet, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
