import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
const mocks = {
  gameTime: 3,
  errorCount: 5
};
it(`<App renderer App`, () => {
  const tree = renderer.create(<App gameTime={mocks.gameTime} errorCount={mocks.errorCount} />).toJSON();
  expect(tree).toMatchSnapshot();
});
