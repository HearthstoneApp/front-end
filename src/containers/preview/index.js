import { connect } from 'react-redux';
import PreviewPane from '../../components/preview_pane';

function mapStateToProps(state) {
  console.log(state);
  return {
    cards
  };
}

export default connect(mapStateToProps)(PreviewPane);
