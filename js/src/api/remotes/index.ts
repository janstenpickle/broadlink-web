import { RemoteData } from '../../types/index';
import { TSMap } from "typescript-map";

const baseURL = `${location.protocol}//${location.hostname}:8000`;

export function fetchRemotesAsync(): Promise<TSMap<string, RemoteData>> {
  const membersURL = `${baseURL}/config/remotes`;

  return fetch(membersURL)
    .then((response) => (response.json()))
    .then(mapToRemotes);
};

function mapToRemotes(githubMembers: any[]): TSMap<string, RemoteData> {
  return new TSMap<string, RemoteData>(githubMembers.map(mapToRemote));
};


function mapToRemote(remote: any): [string, RemoteData] {
  return [remote.name, {
    name: remote.name,
    isActive: (remote.isActive || true),
    buttons: (remote.buttons || []),
  }];
};

export const remotesAPI = {
  fetchRemotesAsync,
};
