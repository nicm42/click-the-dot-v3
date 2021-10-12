/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/svelte';
import Shape from './Shape.svelte';

test('Circles are there', () => {
  const scores = { Circle: 1.2, Heart: 2.4, Hexagon: 2.8, Star: 1.6, Square: 1.8, Triangle: 3.0 };
  render(Shape, {
    shape: 'Circle',
    isFinishedGrowing: false,
    ratio: 2.0,
    scores: scores,
    isReset: false,
    initialSize: '100px',
  });
  expect(screen.getAllByTestId('circle')).toHaveLength(2);
});

test('Squares are there', () => {
  const scores = { Circle: 1.2, Heart: 2.4, Hexagon: 2.8, Star: 1.6, Square: 1.8, Triangle: 3.0 };
  render(Shape, {
    shape: 'Square',
    isFinishedGrowing: false,
    ratio: 2.0,
    scores: scores,
    isReset: false,
    initialSize: '100px',
  });
  expect(screen.getAllByTestId('square')).toHaveLength(2);
});

test('Hearts are there', () => {
  const scores = { Circle: 1.2, Heart: 2.4, Hexagon: 2.8, Star: 1.6, Square: 1.8, Triangle: 3.0 };
  render(Shape, {
    shape: 'Heart',
    isFinishedGrowing: false,
    ratio: 2.0,
    scores: scores,
    isReset: false,
    initialSize: '100px',
  });
  expect(screen.getAllByTestId('heart')).toHaveLength(2);
});

test('Hexagons are there', () => {
  const scores = { Circle: 1.2, Heart: 2.4, Hexagon: 2.8, Star: 1.6, Square: 1.8, Triangle: 3.0 };
  render(Shape, {
    shape: 'Hexagon',
    isFinishedGrowing: false,
    ratio: 2.0,
    scores: scores,
    isReset: false,
    initialSize: '100px',
  });
  expect(screen.getAllByTestId('hexagon')).toHaveLength(2);
});

test('Stars are there', () => {
  const scores = { Circle: 1.2, Heart: 2.4, Hexagon: 2.8, Star: 1.6, Square: 1.8, Triangle: 3.0 };
  render(Shape, {
    shape: 'Star',
    isFinishedGrowing: false,
    ratio: 2.0,
    scores: scores,
    isReset: false,
    initialSize: '100px',
  });
  expect(screen.getAllByTestId('star')).toHaveLength(2);
});

test('Triangles are there', () => {
  const scores = { Circle: 1.2, Heart: 2.4, Hexagon: 2.8, Star: 1.6, Square: 1.8, Triangle: 3.0 };
  render(Shape, {
    shape: 'Triangle',
    isFinishedGrowing: false,
    ratio: 2.0,
    scores: scores,
    isReset: false,
    initialSize: '100px',
  });
  expect(screen.getAllByTestId('triangle')).toHaveLength(2);
});

test('Initial set up', () => {
  const scores = { Circle: 1.2, Heart: 2.4, Hexagon: 2.8, Star: 1.6, Square: 1.8, Triangle: 3.0 };
  render(Shape, {
    shape: 'Circle',
    isFinishedGrowing: false,
    ratio: 2.0,
    scores: scores,
    isReset: false,
    initialSize: '100px',
  });
  expect(screen.getByTestId('shape-svg')).not.toHaveClass('clicked');
  expect(screen.getByTestId('helper-svg')).not.toBeVisible();
});

test('State after finished growing', () => {
  const scores = { Circle: 1.2, Heart: 2.4, Hexagon: 2.8, Star: 1.6, Square: 1.8, Triangle: 3.0 };
  render(Shape, {
    shape: 'Circle',
    isFinishedGrowing: true,
    ratio: 2.0,
    scores: scores,
    isReset: false,
    initialSize: '100px',
  });
  expect(screen.getByTestId('shape-svg')).toHaveClass('clicked');
  expect(screen.getByTestId('helper-svg')).toBeVisible();
});

test('Shape grows on click', async () => {
  const scores = { Circle: 1.2, Heart: 2.4, Hexagon: 2.8, Star: 1.6, Square: 1.8, Triangle: 3.0 };
  render(Shape, {
    shape: 'Circle',
    isFinishedGrowing: false,
    ratio: 2.0,
    scores: scores,
    isReset: false,
    initialSize: '100px',
  });
  expect(screen.getByTestId('shape-svg')).not.toHaveClass('clicked');
  expect(screen.getByTestId('shape-svg')).toHaveStyle('transform: scale(1)');
  fireEvent.click(screen.getAllByTestId('circle')[0]);
  waitFor(() => {
    expect(screen.getByTestId('shape-svg')).toHaveClass('clicked');
    expect(screen.getByTestId('shape-svg')).toHaveStyle('transform: scale(3)');
    expect(localStorage.getItem('Circle')).toBe('3.0');
  });
});

test('Shape stops growing on second click', async () => {
  const scores = { Circle: 1.2, Heart: 2.4, Hexagon: 2.8, Star: 1.6, Square: 1.8, Triangle: 3.0 };
  render(Shape, {
    shape: 'Circle',
    isFinishedGrowing: false,
    ratio: 2.0,
    scores: scores,
    isReset: false,
    initialSize: '100px',
  });
  expect(screen.getByTestId('shape-svg')).not.toHaveClass('clicked');
  expect(screen.getByTestId('shape-svg')).toHaveStyle('transform: scale(1)');
  fireEvent.click(screen.getAllByTestId('circle')[0]);
  waitFor(() => fireEvent.click(screen.getAllByTestId('circle')[0]));
  waitFor(() => {
    expect(screen.getByTestId('shape-svg')).toHaveClass('clicked');
    expect(localStorage.getItem('Circle')).toBeTruthy();
    expect(localStorage.getItem('Circle')).not.toBe('3.0');
  });
});

test('Shape grows on space press', async () => {
  const scores = { Circle: 1.2, Heart: 2.4, Hexagon: 2.8, Star: 1.6, Square: 1.8, Triangle: 3.0 };
  render(Shape, {
    shape: 'Circle',
    isFinishedGrowing: false,
    ratio: 2.0,
    scores: scores,
    isReset: false,
    initialSize: '100px',
  });
  expect(screen.getByTestId('shape-svg')).not.toHaveClass('clicked');
  expect(screen.getByTestId('shape-svg')).toHaveStyle('transform: scale(1)');
  fireEvent.keyPress(screen.getAllByTestId('circle')[0], { key: ' ' });
  waitFor(() => {
    expect(screen.getByTestId('shape-svg')).toHaveClass('clicked');
    expect(screen.getByTestId('shape-svg')).toHaveStyle('transform: scale(3)');
    expect(localStorage.getItem('Circle')).toBe('3.0');
  });
});

test('Shape stops growing on second space press', async () => {
  const scores = { Circle: 1.2, Heart: 2.4, Hexagon: 2.8, Star: 1.6, Square: 1.8, Triangle: 3.0 };
  render(Shape, {
    shape: 'Circle',
    isFinishedGrowing: false,
    ratio: 2.0,
    scores: scores,
    isReset: false,
    initialSize: '100px',
  });
  expect(screen.getByTestId('shape-svg')).not.toHaveClass('clicked');
  expect(screen.getByTestId('shape-svg')).toHaveStyle('transform: scale(1)');
  fireEvent.keyPress(screen.getAllByTestId('circle')[0], {
    key: ' ',
    code: 'Space',
  });
  waitFor(() =>
    fireEvent.keyPress(screen.getAllByTestId('circle')[0], {
      key: ' ',
      code: 'Space',
    })
  );
  waitFor(() => {
    expect(screen.getByTestId('shape-svg')).toHaveClass('clicked');
    expect(localStorage.getItem('Circle')).toBeTruthy();
    expect(localStorage.getItem('Circle')).not.toBe('3.0');
  });
});

test('localStorage is only updated if new score is closer to 2.0', async () => {
  const scores = { Circle: 1.2, Heart: 2.4, Hexagon: 2.8, Star: 1.6, Square: 1.8, Triangle: 3.0 };
  render(Shape, {
    shape: 'Circle',
    isFinishedGrowing: false,
    ratio: 2.0,
    scores: scores,
    isReset: false,
    initialSize: '100px',
  });
  fireEvent.click(screen.getAllByTestId('circle')[0]);
  waitFor(() => expect(localStorage.getItem('Circle')).not.toBe('3.0'));
});
