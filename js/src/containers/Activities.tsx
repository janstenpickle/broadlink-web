import Activities from '../components/Activities';
import { StoreState } from '../types/index';
import * as actions from '../actions/';
import { connect, Dispatch } from 'react-redux';


export function mapStateToProps(state: StoreState) {
  return {
    activities: state.activities
  };
}

const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => ({
  fetchActivities: () => dispatch(actions.loadActivitiesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
