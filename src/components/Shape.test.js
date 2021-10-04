/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/svelte'
import Shape from './Shape.svelte';

test('Circles are there', () => {
  const scores = {'Circle': 1.2, 'Square': 1.8, 'Triangle': 3.0};
  render(Shape, {shape: 'Circle', finishedGrowing: false, ratio: 2.0, scores: scores, reset: false, initialSize: '100px'});
  expect(screen.getAllByTestId('circle')).toHaveLength(2);
  expect(screen.getAllByTestId('circle')[0]).toHaveClass('shape');
  expect(screen.getAllByTestId('circle')[1]).toHaveClass('helper');
})

test('Squares are there', () => {
  const scores = {'Circle': 1.2, 'Square': 1.8, 'Triangle': 3.0};
  render(Shape, {shape: 'Square', finishedGrowing: false, ratio: 2.0, scores: scores, reset: false, initialSize: '100px'});
  expect(screen.getAllByTestId('square')).toHaveLength(2);
  expect(screen.getAllByTestId('square')[0]).toHaveClass('shape');
  expect(screen.getAllByTestId('square')[1]).toHaveClass('helper');
})

test('Triangles are there', () => {
  const scores = {'Circle': 1.2, 'Square': 1.8, 'Triangle': 3.0};
  render(Shape, {shape: 'Triangle', finishedGrowing: false, ratio: 2.0, scores: scores, reset: false, initialSize: '100px'});
  expect(screen.getAllByTestId('triangle')).toHaveLength(2);
  expect(screen.getAllByTestId('triangle')[0]).toHaveClass('shape');
  expect(screen.getAllByTestId('triangle')[1]).toHaveClass('helper');
})
