import Links from '../components/Links';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ remotes, focusedRemote }: StoreState) {
  return {
    remotes
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    focus: (remote: string) => dispatch(actions.focusRemote(remote)),
    toggle: (remote: string, value: boolean) => dispatch(actions.toggleRemote(remote, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Links);
