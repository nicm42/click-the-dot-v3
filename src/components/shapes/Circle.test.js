/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte'
import Circle from './Circle.svelte';

test('Circle exists for shape', () => {
  render(Circle, {shapeType: 'shape'});
  expect(screen.getByTestId('circle')).toBeInTheDocument();
  expect(screen.getByTestId('circle')).toHaveClass('shape');
})

test('Circle exists for helper', () => {
  render(Circle, {shapeType: 'helper'});
  expect(screen.getByTestId('circle')).toBeInTheDocument();
  expect(screen.getByTestId('circle')).toHaveClass('helper');
})

test('Circle exists for closest', () => {
  render(Circle, {shapeType: 'closest'});
  expect(screen.getByTestId('circle')).toBeInTheDocument();
  expect(screen.getByTestId('circle')).not.toHaveClass();
})
