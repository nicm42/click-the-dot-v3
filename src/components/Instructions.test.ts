/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import Instructions from './Instructions.svelte';

test('Text is correct when no shape has been selected', () => {
  render(Instructions, { shape: 'shape' });
  expect(screen.getByText('Select a shape.')).toBeInTheDocument();
  expect(
    screen.getByText('Click or press spacebar on the shape.')
  ).toBeInTheDocument();
  expect(
    screen.getByText("Click or press spacebar again when it's twice the size.")
  ).toBeInTheDocument();
});

test('Text is correct when shape is a circle', () => {
  render(Instructions, { shape: 'Circle' });
  expect(screen.queryByText('Select a shape.')).not.toBeInTheDocument();
  expect(
    screen.getByText('Click or press spacebar on the circle.')
  ).toBeInTheDocument();
  expect(
    screen.getByText("Click or press spacebar again when it's twice the size.")
  ).toBeInTheDocument();
});

test('Text is correct when shape is a square', () => {
  render(Instructions, { shape: 'Square' });
  expect(screen.queryByText('Select a shape.')).not.toBeInTheDocument();
  expect(
    screen.getByText('Click or press spacebar on the square.')
  ).toBeInTheDocument();
  expect(
    screen.getByText("Click or press spacebar again when it's twice the size.")
  ).toBeInTheDocument();
});

test('Text is correct when shape is a triangle', () => {
  render(Instructions, { shape: 'Triangle' });
  expect(screen.queryByText('Select a shape.')).not.toBeInTheDocument();
  expect(
    screen.getByText('Click or press spacebar on the triangle.')
  ).toBeInTheDocument();
  expect(
    screen.getByText("Click or press spacebar again when it's twice the size.")
  ).toBeInTheDocument();
});
