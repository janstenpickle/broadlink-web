import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Hello from './containers/Hello';
import Links from './containers/Links';
import MainButtons from './containers/MainButtons';
import Activities from './containers/Activities';

import { TSMap } from 'typescript-map';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState, RemoteData } from './types/index';
import thunk from 'redux-thunk';

const store = createStore<StoreState>(enthusiasm, {
  buttons: [],
  activities: [],
  remotes: new TSMap<string, RemoteData>(),
  focusedRemote: 'TV',
}, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <Activities />
  </Provider>,
  document.getElementById('activities') as HTMLElement
);

ReactDOM.render(
  <Provider store={store}>
    <MainButtons />
  </Provider>,
  document.getElementById('main-buttons') as HTMLElement
);

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('remotes') as HTMLElement
);

ReactDOM.render(
  <Provider store={store}>
    <Links />
  </Provider>,
  document.getElementById('navigation') as HTMLElement
);


registerServiceWorker();
