/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte'
import Closest from './Closest.svelte';

test('Text is all there', () => {
  const shapes = ['Circle', 'Square', 'Triangle'];
  const scores = {'Circle': 1.2, 'Square': 1.8, 'Triangle': 3.0};
  render(Closest, {shapes: shapes, scores: scores});
  expect(screen.getByText('1.2')).toBeInTheDocument();
  expect(screen.getByText('1.8')).toBeInTheDocument();
  expect(screen.queryByText('3.0')).not.toBeInTheDocument();
})

test('Shapes are all there', () => {
  const shapes = ['Circle', 'Square', 'Triangle'];
  const scores = {'Circle': 1.2, 'Square': 1.8, 'Triangle': 3.0};
  render(Closest, {shapes: shapes, scores: scores});
  expect(screen.getByTestId('circle')).toBeInTheDocument();
  expect(screen.getByTestId('square')).toBeInTheDocument();
  expect(screen.getByTestId('triangle')).toBeInTheDocument();
})
