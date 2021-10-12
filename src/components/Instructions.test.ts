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

test('Text is correct when shape is a heart', () => {
  render(Instructions, { shape: 'Heart' });
  expect(screen.queryByText('Select a shape.')).not.toBeInTheDocument();
  expect(
    screen.getByText('Click or press spacebar on the heart.')
  ).toBeInTheDocument();
  expect(
    screen.getByText("Click or press spacebar again when it's twice the size.")
  ).toBeInTheDocument();
});

test('Text is correct when shape is a hexagon', () => {
  render(Instructions, { shape: 'Hexagon' });
  expect(screen.queryByText('Select a shape.')).not.toBeInTheDocument();
  expect(
    screen.getByText('Click or press spacebar on the hexagon.')
  ).toBeInTheDocument();
  expect(
    screen.getByText("Click or press spacebar again when it's twice the size.")
  ).toBeInTheDocument();
});

test('Text is correct when shape is a star', () => {
  render(Instructions, { shape: 'Star' });
  expect(screen.queryByText('Select a shape.')).not.toBeInTheDocument();
  expect(
    screen.getByText('Click or press spacebar on the star.')
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
