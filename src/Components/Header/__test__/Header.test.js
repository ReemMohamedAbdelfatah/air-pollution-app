import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore.js';

describe('Header Component', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
