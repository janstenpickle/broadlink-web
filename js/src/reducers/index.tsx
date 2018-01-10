import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import { FOCUS_REMOTE, TOGGLE_REMOTE, LOADED_BUTTONS, LOADED_REMOTES, LOADED_ACTIVITIES } from '../constants/index';

export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
  switch (action.type) {
    case FOCUS_REMOTE:
      return { ...state, focusedRemote: action.name };
    case TOGGLE_REMOTE:
      const remote = state.remotes.get(action.name);
      remote.isActive = action.value;
      const remotes = state.remotes.set(action.name, remote);
      return { ...state, remotes: remotes.clone() };
    case LOADED_BUTTONS:
      return { ...state, buttons: action.payload };
    case LOADED_REMOTES:
      return { ...state, remotes: action.payload };
    case LOADED_ACTIVITIES:
      return { ...state, activities: action.payload };
    default:
      return state;
  }
}
