import { ButtonData } from '../../types/index';

const baseURL = 'http://192.168.1.103:5000';

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
