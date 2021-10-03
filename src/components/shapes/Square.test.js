/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte'
import Square from './Square.svelte';

test('Square exists for shape', () => {
  render(Square, {shapeType: 'shape'});
  expect(screen.getByTestId('square')).toBeInTheDocument();
  expect(screen.getByTestId('square')).toHaveClass('shape');
})

test('Square exists for helper', () => {
  render(Square, {shapeType: 'helper'});
  expect(screen.getByTestId('square')).toBeInTheDocument();
  expect(screen.getByTestId('square')).toHaveClass('helper');
})

test('Square exists for closest', () => {
  render(Square, {shapeType: 'closest'});
  expect(screen.getByTestId('square')).toBeInTheDocument();
  expect(screen.getByTestId('square')).not.toHaveClass();
})
