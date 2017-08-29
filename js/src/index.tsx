import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Hello from './containers/Hello';
import Links from './containers/Links';

import { TSMap } from "typescript-map";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState, RemoteData } from './types/index';

const store = createStore<StoreState>(enthusiasm, {
  remotes: new TSMap<string, RemoteData>([
    ['hello', { isActive: true }],
    ['derp', { isActive: true }],
    ['nic', { isActive: true }],
    ['cage', { isActive: true }],
    ['face',  { isActive: true }],
    ['off',  { isActive: true }],
    ['dsfs',  { isActive: true }],
    ['sdf',  { isActive: true }],
    ['wqeqe',  { isActive: true }],
    ['324wdsfa',  { isActive: true }],
    ['poweqj3',  { isActive: true }],
    ['3424',  { isActive: false }]
  ]),
  focusedRemote: 'hello'
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

ReactDOM.render(
  <Provider store={store}>
    <Links />
  </Provider>,
  document.getElementById('navigation') as HTMLElement
);
registerServiceWorker();
