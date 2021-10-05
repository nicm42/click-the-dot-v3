/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/svelte'
import App from './App.svelte';

jest.setTimeout(20000); // Tween takes max 7 seconds

test('All the elements are there on load', () => {
  render(App);
  expect(screen.getByText('Select a shape.')).toBeInTheDocument(); // Instructions
  expect(screen.getByText('Select a shape')).toBeInTheDocument(); // Select
  expect(screen.getAllByTestId('circle')).toHaveLength(1); // Shape
  expect(screen.getByText('Closest scores')).toBeInTheDocument(); // Closest
  expect(screen.queryByText('Missed!')).not.toBeInTheDocument(); //Results
})
