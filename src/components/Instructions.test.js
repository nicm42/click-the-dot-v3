/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte'
import Instructions from './Instructions.svelte';

test('Text is correct when no shape has been selected', () => {
  const {getByText} = render(Instructions, {shape: 'shape'})
  expect(getByText('Select a shape.')).toBeInTheDocument();
  expect(getByText('Click the shape.')).toBeInTheDocument();
  expect(getByText('Click it again when it\'s twice the size.')).toBeInTheDocument();
})

test('Text is correct when shape is a circle', () => {
  const {queryByText} = render(Instructions, {shape: 'Circle'})
  expect(queryByText('Select a shape.')).not.toBeInTheDocument();
  expect(queryByText('Click the circle.')).toBeInTheDocument();
  expect(queryByText('Click it again when it\'s twice the size.')).toBeInTheDocument();
})

test('Text is correct when shape is a square', () => {
  const {queryByText} = render(Instructions, {shape: 'Square'})
  expect(queryByText('Select a shape.')).not.toBeInTheDocument();
  expect(queryByText('Click the square.')).toBeInTheDocument();
  expect(queryByText('Click it again when it\'s twice the size.')).toBeInTheDocument();
})

test('Text is correct when shape is a triangle', () => {
  const {queryByText} = render(Instructions, {shape: 'Triangle'})
  expect(queryByText('Select a shape.')).not.toBeInTheDocument();
  expect(queryByText('Click the triangle.')).toBeInTheDocument();
  expect(queryByText('Click it again when it\'s twice the size.')).toBeInTheDocument();
})
