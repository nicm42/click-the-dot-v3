/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte'
import Result from './Result.svelte';

test('Text is all there for missed', () => {
  render(Result, {ratio: 1.2, reset: false});
  expect(screen.getByText('Missed!')).toBeInTheDocument();
  expect(screen.getByText('The shape is now 1.2 times its original size')).toBeInTheDocument();
  expect(screen.getByRole('button', {name: /Try again/i})).toBeInTheDocument();
})

test('Text is all there for close', () => {
  render(Result, {ratio: 1.9, reset: false});
  expect(screen.getByText('Close!')).toBeInTheDocument();
  expect(screen.getByText('The shape is now 1.9 times its original size')).toBeInTheDocument();
  expect(screen.getByRole('button', {name: /Try again/i})).toBeInTheDocument();
})

test('Text is all there for spot-on', () => {
  render(Result, {ratio: '2.0', reset: false});
  expect(screen.getByText('Well done!')).toBeInTheDocument();
  expect(screen.getByText('The shape is now 2.0 times its original size')).toBeInTheDocument();
  expect(screen.getByRole('button', {name: /Try again/i})).toBeInTheDocument();
})
