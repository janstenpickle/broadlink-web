import * as constants from '../constants'

export interface FocusRemote {
    type: constants.FOCUS_REMOTE,
    name: string
}

export interface ToggleRemote {
    type: constants.TOGGLE_REMOTE,
    name: string,
    value: boolean
}

export type EnthusiasmAction = FocusRemote | ToggleRemote;

export function focusRemote(name: string): FocusRemote {
  return {
    type: constants.FOCUS_REMOTE,
    name
  }
}

export function toggleRemote(name: string, value: boolean): ToggleRemote {
  return {
    type: constants.TOGGLE_REMOTE,
    name,
    value
  }
}
