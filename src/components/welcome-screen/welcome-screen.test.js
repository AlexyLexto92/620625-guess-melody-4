import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';
const mocks = {
  gameTime: 3,
  errorCount: 5
};
it(`<WelcomeScreen/> shoud render welcomeScreen`, () => {
  const tree = renderer.create(<WelcomeScreen gameTime={mocks.gameTime} errorCount={mocks.errorCount} />).toJSON();
  expect(tree).toMatchSnapshot();
});
