import { TSMap } from "typescript-map";

export interface StoreState {
    buttons: ButtonData[];
    activities: ButtonData[];
    remotes: TSMap<string, RemoteData>;
    focusedRemote: string;
}

export interface Coords {
  x: number;
  y: number;
}

export interface RemoteData {
  name: string;
  isActive: boolean;
  buttons: ButtonData[];
  lg?: Coords;
  md?: Coords;
  sm?: Coords;
  xs?: Coords;
  xxs?: Coords;
}

export interface ButtonData {
  name: string;
  label?: string;
  icon?: string;
  colored?: boolean;
  isMacro?: boolean;
  newRow?: boolean;
}
