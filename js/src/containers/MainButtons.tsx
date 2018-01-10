import MainButtons from '../components/MainButtons';
import { StoreState } from '../types/index';
import * as actions from '../actions/';
import { connect, Dispatch } from 'react-redux';


export function mapStateToProps(state: StoreState) {
  return {
    buttons: state.buttons
  };
}

const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => ({
  fetchButtons: () => dispatch(actions.loadButtonsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainButtons);
