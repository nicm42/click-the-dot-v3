/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/svelte'
import App from './App.svelte';

test('All the elements are there on load', () => {
  render(App);
  expect(screen.getByText('Click or press spacebar on the shape.')).toBeInTheDocument(); // Instructions
  expect(screen.getByText('Select a shape')).toBeInTheDocument(); // Select
  expect(screen.getAllByTestId('circle')).toHaveLength(1); // None in Shape = only one is in Closest
  expect(screen.getByText('Closest scores')).toBeInTheDocument(); // Closest
  expect(localStorage.getItem('Circle')).toBeFalsy;
  expect(screen.queryByText('3.0')).not.toBeInTheDocument();
  expect(screen.queryByRole('button', {name: /Try again/i})).not.toBeInTheDocument(); //Results
})

test('Shape and instructions are changed when select changes', async () => {
  render(App);
  fireEvent.change(screen.getByTestId('select'), { target: { value: 'Square' } });
  waitFor(() => {
    expect(screen.getByText('Click or press spacebar on the square.')).toBeInTheDocument();
    expect(screen.getAllByTestId('square')).toHaveLength(3); //Two in Shape and one in Closest
  });
})

test('Results text is shown after shape grows', async () => {
  render(App);
  fireEvent.change(screen.getByTestId('select'), { target: { value: 'Square' } });
  waitFor(() => fireEvent.click(screen.getAllByTestId('square')[0]));
  waitFor(() => expect(screen.getByText('Missed!')).toBeInTheDocument());
})

test('Closest text is updated after shape grows', async () => {
  render(App);
  fireEvent.change(screen.getByTestId('select'), { target: { value: 'Square' } });
  waitFor(() => fireEvent.click(screen.getAllByTestId('square')[0]));
  waitFor(() => fireEvent.click(screen.getAllByTestId('square')[0]));
  waitFor(() => expect(screen.getByTestId('closest-score')).toBeInTheDocument());
})

test('After clicking shape, selecting another shape resets everything', async () => {
  render(App);
  fireEvent.change(screen.getByTestId('select'), { target: { value: 'Square' } });
  waitFor(() => fireEvent.click(screen.getAllByTestId('square')[0]));
  waitFor(() => fireEvent.change(screen.getByTestId('select'), { target: { value: 'Triangle' } }));  
  waitFor(() => {
    expect(screen.getByText('Click or press spacebar on the triangle.')).toBeInTheDocument();
    expect(screen.getAllByTestId('triangle')).toHaveLength(3); //Two in Shape and one in Closest
  });
})

test('Clicking try again resets everything', async () => {
  render(App);
  fireEvent.change(screen.getByTestId('select'), { target: { value: 'Square' } });
  waitFor(() => fireEvent.click(screen.getAllByTestId('square')[0]));
  waitFor(() => fireEvent.click(screen.getByRole('button', {name: /Try again/i})));
  waitFor(() => {
    // Shape should be original size
    expect(screen.getByTestId('shape-svg')).toHaveStyle('transform: scale(1)');
    // And results text shouldn't be there
    expect(screen.queryByRole('button', {name: /Try again/i})).not.toBeInTheDocument();
  });
})