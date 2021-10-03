/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/svelte'
import Select from './Select.svelte';

test('Text is all there', () => {
  const shapes = ['Circle', 'Square', 'Triangle'];
  render(Select, {shapes: shapes, selectedShape: 'shape', reset: false, initialSize: 100});
  expect(screen.getByText('Select a shape')).toBeInTheDocument();
  expect(screen.getByText('Circle')).toBeInTheDocument();
  expect(screen.getByText('Square')).toBeInTheDocument();
  expect(screen.getByText('Triangle')).toBeInTheDocument();
})

test('"Select a shape" is selected to start with', () => {
  const shapes = ['Circle', 'Square', 'Triangle'];
  render(Select, {shapes: shapes, selectedShape: 'shape', reset: false, initialSize: 100});
  expect(screen.getByText('Select a shape').selected).toBeTruthy();
  expect(screen.getByText('Circle').selected).toBeFalsy();
  expect(screen.getByText('Square').selected).toBeFalsy();
  expect(screen.getByText('Triangle').selected).toBeFalsy();
})

test('The selected option changes when you select a circle', () => {
  const shapes = ['Circle', 'Square', 'Triangle'];
  render(Select, {shapes: shapes, selectedShape: 'shape', reset: false, initialSize: 100});
  fireEvent.change(screen.getByTestId('select'), { target: { value: 'Circle' } })
  expect(screen.getByText('Select a shape').selected).toBeFalsy();
  expect(screen.getByText('Circle').selected).toBeTruthy();
  expect(screen.getByText('Square').selected).toBeFalsy();
  expect(screen.getByText('Triangle').selected).toBeFalsy();
})

test('The selected option changes when you select a square', () => {
  const shapes = ['Circle', 'Square', 'Triangle'];
  render(Select, {shapes: shapes, selectedShape: 'shape', reset: false, initialSize: 100});
  fireEvent.change(screen.getByTestId('select'), { target: { value: 'Square' } })
  expect(screen.getByText('Select a shape').selected).toBeFalsy();
  expect(screen.getByText('Circle').selected).toBeFalsy();
  expect(screen.getByText('Square').selected).toBeTruthy();
  expect(screen.getByText('Triangle').selected).toBeFalsy();
})

test('The selected option changes when you select a triangle', () => {
  const shapes = ['Circle', 'Square', 'Triangle'];
  render(Select, {shapes: shapes, selectedShape: 'shape', reset: false, initialSize: 100});
  fireEvent.change(screen.getByTestId('select'), { target: { value: 'Triangle' } })
  expect(screen.getByText('Select a shape').selected).toBeFalsy();
  expect(screen.getByText('Circle').selected).toBeFalsy();
  expect(screen.getByText('Square').selected).toBeFalsy();
  expect(screen.getByText('Triangle').selected).toBeTruthy();
})

test('"Select a shape" is not selectable', () => {
  const shapes = ['Circle', 'Square', 'Triangle'];
  render(Select, {shapes: shapes, selectedShape: 'shape', reset: false, initialSize: 100});
  fireEvent.change(screen.getByTestId('select'), { target: { value: 'Select a shape' } })
  expect(screen.getByText('Select a shape').selected).toBeFalsy();
})
