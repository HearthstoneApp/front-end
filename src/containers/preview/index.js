import { connect } from 'react-redux';
import PreviewPane from '../../components/preview_pane';

function mapStateToProps({ cards }) {
  return {
    cards
  };
}

export default connect(mapStateToProps)(PreviewPane);
