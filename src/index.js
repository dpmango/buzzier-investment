import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import '@styles/index.scss';
import App from '@c/App';
import { BrowserInfo, VersionCheck, History } from '@services';

ReactDOM.render(<App />, document.getElementById('root'));

// new BrowserInfo();
// new History();
