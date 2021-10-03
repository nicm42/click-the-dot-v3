/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte'
import Triangle from './Triangle.svelte';

test('Triangle exists for shape', () => {
  render(Triangle, {shapeType: 'shape'});
  expect(screen.getByTestId('triangle')).toBeInTheDocument();
  expect(screen.getByTestId('triangle')).toHaveClass('shape');
})

test('Triangle exists for helper', () => {
  render(Triangle, {shapeType: 'helper'});
  expect(screen.getByTestId('triangle')).toBeInTheDocument();
  expect(screen.getByTestId('triangle')).toHaveClass('helper');
})

test('Triangle exists for closest', () => {
  render(Triangle, {shapeType: 'closest'});
  expect(screen.getByTestId('triangle')).toBeInTheDocument();
  expect(screen.getByTestId('triangle')).not.toHaveClass();
})
