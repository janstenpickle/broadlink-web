import { TSMap } from "typescript-map";

export interface StoreState {
    remotes: TSMap<string, RemoteData>;
    focusedRemote: string;
}
export interface RemoteData {
  isActive: boolean;
}
