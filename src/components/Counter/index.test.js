import React from 'react';
import renderer from 'react-test-renderer';
import { Counter } from './index';

it('renders counter', () => {
  const tree = renderer.create(<Counter a="1" count={3} />).toJSON();
  expect(tree).toMatchSnapshot();
});
