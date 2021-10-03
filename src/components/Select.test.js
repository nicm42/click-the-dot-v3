/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte'
import Select from './Select.svelte';

test('Text is all there', () => {
  const shapes = ['Circle', 'Square', 'Triangle'];
  render(Select, {shapes: shapes, selectedShape: 'shape', reset: false, initialSize: 100});
  expect(screen.getByText('Select a shape')).toBeInTheDocument();
  expect(screen.getByText('Circle')).toBeInTheDocument();
  expect(screen.getByText('Square')).toBeInTheDocument();
  expect(screen.getByText('Triangle')).toBeInTheDocument();
})
