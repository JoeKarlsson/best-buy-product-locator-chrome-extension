import React from 'react';
import renderer from 'react-test-renderer';
import AppContainer from './App';

describe('App', () => {
  describe('rendering', () => {
    describe('initial state', () => {
      it('is rendered heathy state', () => {
        const component = renderer.create(<AppContainer />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
