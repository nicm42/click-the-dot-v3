/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/svelte';
import Closest from './Closest.svelte';

test('Text is all there', () => {
  const shapes = ['Circle', 'Heart', 'Hexagon', 'Star', 'Square', 'Triangle'];
  const scores = {
    Circle: 1.2,
    Heart: 2.4,
    Hexagon: 2.8,
    Star: 1.6,
    Square: 1.8,
    Triangle: 3.0,
  };
  render(Closest, { shapes: shapes, scores: scores });
  expect(screen.getByText('1.2')).toBeInTheDocument();
  expect(screen.getByText('2.4')).toBeInTheDocument();
  expect(screen.getByText('2.8')).toBeInTheDocument();
  expect(screen.getByText('1.6')).toBeInTheDocument();
  expect(screen.getByText('1.8')).toBeInTheDocument();
  expect(screen.queryByText('3.0')).not.toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /Clear scores/i })
  ).toBeInTheDocument();
});

test('Shapes are all there', () => {
  const shapes = ['Circle', 'Heart', 'Hexagon', 'Star', 'Square', 'Triangle'];
  const scores = {
    Circle: 1.2,
    Heart: 2.4,
    Hexagon: 2.8,
    Star: 1.6,
    Square: 1.8,
    Triangle: 3.0,
  };
  render(Closest, { shapes: shapes, scores: scores });
  expect(screen.getByTestId('circle')).toBeInTheDocument();
  expect(screen.getByTestId('heart')).toBeInTheDocument();
  expect(screen.getByTestId('hexagon')).toBeInTheDocument();
  expect(screen.getByTestId('star')).toBeInTheDocument();
  expect(screen.getByTestId('square')).toBeInTheDocument();
  expect(screen.getByTestId('triangle')).toBeInTheDocument();
  expect(screen.getByTitle('Circle icon')).toBeInTheDocument();
  expect(screen.getByTitle('Heart icon')).toBeInTheDocument();
  expect(screen.getByTitle('Hexagon icon')).toBeInTheDocument();
  expect(screen.getByTitle('Star icon')).toBeInTheDocument();
  expect(screen.getByTitle('Square icon')).toBeInTheDocument();
  expect(screen.getByTitle('Triangle icon')).toBeInTheDocument();
  expect(
    screen.getByText('Icon for the score for the circle')
  ).toBeInTheDocument();
  expect(
    screen.getByText('Icon for the score for the heart')
  ).toBeInTheDocument();
  expect(
    screen.getByText('Icon for the score for the hexagon')
  ).toBeInTheDocument();
  expect(
    screen.getByText('Icon for the score for the star')
  ).toBeInTheDocument();
  expect(
    screen.getByText('Icon for the score for the square')
  ).toBeInTheDocument();
  expect(
    screen.getByText('Icon for the score for the triangle')
  ).toBeInTheDocument();
});

test('Local storage is cleared on button click', async () => {
  // Mock window.confirm
  let confirmSpy: jest.SpyInstance<boolean, [message?: string]>;
  confirmSpy = jest.spyOn(window, 'confirm');
  confirmSpy.mockImplementation(jest.fn(() => true));

  // First need to add to localStorage to check it's been cleared
  localStorage.setItem('Circle', '1.2');
  localStorage.setItem('Heart', '2.4');
  localStorage.setItem('Hexagon', '2.8');
  localStorage.setItem('Star', '1.6');
  localStorage.setItem('Square', '1.8');
  localStorage.setItem('Triangle', '2.0');

  const shapes = ['Circle', 'Square', 'Triangle'];
  const scores = { Circle: 1.2, Square: 1.8, Triangle: 3.0 };
  render(Closest, { shapes: shapes, scores: scores });
  fireEvent.click(screen.getByRole('button', { name: /Clear scores/i }));
  waitFor(() => {
    expect(confirmSpy).toBeCalledWith(
      'Are you sure you want to clear the closest scores?'
    );
    expect(localStorage.getItem('Circle')).toBeFalsy;
    expect(localStorage.getItem('Square')).toBeFalsy;
    expect(localStorage.getItem('Triangle')).toBeFalsy;
    expect(screen.queryByText('1.2')).not.toBeInTheDocument();
    expect(screen.queryByText('2.4')).not.toBeInTheDocument();
    expect(screen.queryByText('2.8')).not.toBeInTheDocument();
    expect(screen.queryByText('1.6')).not.toBeInTheDocument();
    expect(screen.queryByText('1.8')).not.toBeInTheDocument();
    expect(screen.queryByText('2.0')).not.toBeInTheDocument();
  });
});
