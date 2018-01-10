import * as constants from '../constants';
import { ButtonData, RemoteData } from '../types/index';
import { buttonsAPI } from '../api/buttons';
import { remotesAPI } from '../api/remotes';
import { Dispatch } from 'react-redux';
import { TSMap } from 'typescript-map';

export interface FocusRemote {
    type: constants.FOCUS_REMOTE;
    name: string;
}

export interface ToggleRemote {
    type: constants.TOGGLE_REMOTE;
    name: string;
    value: boolean;
}

export const loadButtonsAction = () => (dispatch: Dispatch<EnthusiasmAction>) => {
  buttonsAPI.fetchButtonsAsync('buttons').then((buttons: ButtonData[]) => {dispatch(updateButtons(buttons))});
};

export interface LoadedButtons {
  type: constants.LOADED_BUTTONS;
  payload: ButtonData[];
}

export const loadActivitiesAction = () => (dispatch: Dispatch<EnthusiasmAction>) => {
  buttonsAPI.fetchButtonsAsync('activities').then((buttons: ButtonData[]) => {dispatch(updateActivities(buttons))});
};

export interface LoadedActivities {
  type: constants.LOADED_ACTIVITIES;
  payload: ButtonData[];
}

export const loadRemotesAction = () => (dispatch: Dispatch<EnthusiasmAction>) => {
  remotesAPI.fetchRemotesAsync().then((remotes: TSMap<string, RemoteData>) => {dispatch(updateRemotes(remotes))});
};

export interface LoadedRemotes {
  type: constants.LOADED_REMOTES;
  payload: TSMap<string, RemoteData>;
}

export type EnthusiasmAction = FocusRemote | ToggleRemote | LoadedButtons | LoadedRemotes | LoadedActivities;

export function focusRemote(name: string): FocusRemote {
  return {
    type: constants.FOCUS_REMOTE,
    name
  };
}

export function toggleRemote(name: string, value: boolean): ToggleRemote {
  return {
    type: constants.TOGGLE_REMOTE,
    name,
    value
  };
}

export function updateButtons(buttons: ButtonData[]): LoadedButtons {
  return {
    type: constants.LOADED_BUTTONS,
    payload: buttons
  };
}

export function updateActivities(buttons: ButtonData[]): LoadedActivities {
  return {
    type: constants.LOADED_ACTIVITIES,
    payload: buttons
  };
}

export function updateRemotes(remotes: TSMap<string, RemoteData>): LoadedRemotes {
  return {
    type: constants.LOADED_REMOTES,
    payload: remotes
  };
}
