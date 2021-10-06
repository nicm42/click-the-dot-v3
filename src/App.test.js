/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/svelte'
import App from './App.svelte';

jest.setTimeout(20000); // Tween takes max 7 seconds

test('All the elements are there on load', () => {
  render(App);
  expect(screen.getByText('Click the shape.')).toBeInTheDocument(); // Instructions
  expect(screen.getByText('Select a shape')).toBeInTheDocument(); // Select
  expect(screen.getAllByTestId('circle')).toHaveLength(1); // None in Shape = only one is in Closest
  expect(screen.getByText('Closest scores')).toBeInTheDocument(); // Closest
  expect(localStorage.getItem('Circle')).toBeFalsy;
  expect(screen.queryByText('3.0')).not.toBeInTheDocument();
  expect(screen.queryByText('Missed!')).not.toBeInTheDocument(); //Results
})

test('Shape and instructions are changed when select changes', async () => {
  render(App);
  fireEvent.change(screen.getByTestId('select'), { target: { value: 'Square' } });
  await new Promise((r) => setTimeout(r, 1000));
  expect(screen.getByText('Click the square.')).toBeInTheDocument();
  expect(screen.getAllByTestId('square')).toHaveLength(3); //Two in Shape and one in Closest
})

test('Results text is shown after shape grows', async () => {
  render(App);
  fireEvent.change(screen.getByTestId('select'), { target: { value: 'Square' } });
  await new Promise((r) => setTimeout(r, 1000));
  fireEvent.click(screen.getAllByTestId('square')[0]);
  // Wait for long enough for shape to have stopped growing
  await new Promise((r) => setTimeout(r, 7000));
  expect(screen.getByText('Missed!')).toBeInTheDocument();
})

test('Closest text is updated after shape grows', async () => {
  render(App);
  fireEvent.change(screen.getByTestId('select'), { target: { value: 'Square' } });
  await new Promise((r) => setTimeout(r, 1000));
  fireEvent.click(screen.getAllByTestId('square')[0]);
  // Wait for a bit before clicking again
  await new Promise((r) => setTimeout(r, 1000));
  fireEvent.click(screen.getAllByTestId('square')[0]);
  await new Promise((r) => setTimeout(r, 1000));
  // There will only be run because we've only run Square
  expect(screen.getByTestId('closest-score')).toBeInTheDocument();
})

test.only('After clicking shape, selecting another shape resets everything', async () => {
  render(App);
  fireEvent.change(screen.getByTestId('select'), { target: { value: 'Square' } });
  await new Promise((r) => setTimeout(r, 1000));
  fireEvent.click(screen.getAllByTestId('square')[0]);
  // Wait for long enough for shape to have stopped growing
  await new Promise((r) => setTimeout(r, 7000));
  fireEvent.change(screen.getByTestId('select'), { target: { value: 'Triangle' } });  
  await new Promise((r) => setTimeout(r, 1000));
  expect(screen.getByText('Click the triangle.')).toBeInTheDocument();
  expect(screen.getAllByTestId('triangle')).toHaveLength(3); //Two in Shape and one in Closest
})