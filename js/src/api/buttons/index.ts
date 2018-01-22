import { ButtonData } from '../../types/index';

const baseURL = `${location.protocol}//${location.hostname}:8000`;

export function fetchButtonsAsync(endpoint: string): Promise<ButtonData[]> {
  const buttonsUrl = `${baseURL}/config/${endpoint}`;

  return fetch(buttonsUrl)
    .then((response) => (response.json()))
    .then(mapToButtons);
};

function mapToButtons(data: any[]): ButtonData[] {
  return data.map(mapToButton);
};

function mapToButton(button: any): ButtonData {
  return {
    name: button.name,
    icon: button.icon,
    label: button.label,
    colored: button.colored,
    isMacro: button.isMacro
  };
};

export const buttonsAPI = {
  fetchButtonsAsync,
};
