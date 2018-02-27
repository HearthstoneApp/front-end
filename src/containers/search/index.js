import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import SearchPane from '../../components/search_pane';

function mapStateToProps({ filters }) {
  return { filters };
}

function mapDispatchToProps(dispatch) {
  return {
    onNameFilter: bindActionCreators(actions.filterName, dispatch),
    onSetFilter: bindActionCreators(actions.filterSet, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPane);
