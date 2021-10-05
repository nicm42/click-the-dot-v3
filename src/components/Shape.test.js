/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/svelte'
import Shape from './Shape.svelte';

jest.setTimeout(20000); // Tween takes max 7 seconds

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

test('Initial set up', () => {
  const scores = {'Circle': 1.2, 'Square': 1.8, 'Triangle': 3.0};
  render(Shape, {shape: 'Circle', finishedGrowing: false, ratio: 2.0, scores: scores, reset: false, initialSize: '100px'});
  expect(screen.getByTestId('shape-svg')).not.toHaveClass('clicked');
  expect(screen.getByTestId('helper-svg')).not.toBeVisible();
})

test('State after finished growing', () => {
  const scores = {'Circle': 1.2, 'Square': 1.8, 'Triangle': 3.0};
  render(Shape, {shape: 'Circle', finishedGrowing: true, ratio: 2.0, scores: scores, reset: false, initialSize: '100px'});
  expect(screen.getByTestId('shape-svg')).toHaveClass('clicked');
  expect(screen.getByTestId('helper-svg')).toBeVisible();
})

test('Shape grows on click', async () => {
  const scores = {'Circle': 1.2, 'Square': 1.8, 'Triangle': 3.0};
  render(Shape, {shape: 'Circle', finishedGrowing: false, ratio: 2.0, scores: scores, reset: false, initialSize: '100px'});
  expect(screen.getByTestId('shape-svg')).not.toHaveClass('clicked');
  expect(screen.getByTestId('shape-svg')).toHaveStyle('transform: scale(1)');
  fireEvent.click(screen.getAllByTestId('circle')[0]);
  // Wait for max tween time before checking it's done anything
  await new Promise((r) => setTimeout(r, 7000));
  expect(screen.getByTestId('shape-svg')).toHaveClass('clicked');
  expect(screen.getByTestId('shape-svg')).toHaveStyle('transform: scale(3)');
  expect(localStorage.getItem('Circle')).toBe('3.0');
})

test('Shape stops growing on second click', async () => {
  const scores = {'Circle': 1.2, 'Square': 1.8, 'Triangle': 3.0};
  render(Shape, {shape: 'Circle', finishedGrowing: false, ratio: 2.0, scores: scores, reset: false, initialSize: '100px'});
  expect(screen.getByTestId('shape-svg')).not.toHaveClass('clicked');
  expect(screen.getByTestId('shape-svg')).toHaveStyle('transform: scale(1)');
  fireEvent.click(screen.getAllByTestId('circle')[0]);
  // Wait for a bit before clicking again
  await new Promise((r) => setTimeout(r, 1000));
  fireEvent.click(screen.getAllByTestId('circle')[0]);
  await new Promise((r) => setTimeout(r, 1000));
  expect(screen.getByTestId('shape-svg')).toHaveClass('clicked');
  expect(localStorage.getItem('Circle')).toBeTruthy();
  expect(localStorage.getItem('Circle')).not.toBe('3.0');
})

