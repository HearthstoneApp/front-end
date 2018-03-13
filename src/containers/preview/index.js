import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';
import PreviewPane from '../../components/preview_pane';

function mapStateToProps({ cards }) {
  return {
    cards
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectResult: bindActionCreators(actions.selectResult, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewPane);
