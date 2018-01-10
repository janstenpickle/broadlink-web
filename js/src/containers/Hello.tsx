import Hello from '../components/Hello';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';

export function mapStateToProps({ remotes, focusedRemote }: StoreState) {
  return {
    remotes: remotes.values(),
    focusedRemote: focusedRemote
  };
}

// export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
//   return {
//     focus: (remote: string) => dispatch(actions.focusRemote(remote)),
//     fetchRemotes: () => dispatch(actions.loadRemotesAction()),
//   };
// }

const mapDispatchToProps = (dispatch: any) => ({
  focus: (remote: string) => dispatch(actions.focusRemote(remote)),
  fetchRemotes: () => dispatch(actions.loadRemotesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
