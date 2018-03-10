import React from 'react';
import { CloudinaryContext } from 'cloudinary-react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>
      <CloudinaryContext cloudName="ruyi">
        <App/>
      </CloudinaryContext>
    </HashRouter>
  </Provider>
);

export default Root;
