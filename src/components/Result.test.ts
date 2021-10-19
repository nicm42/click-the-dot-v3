/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import Result from './Result.svelte';

test('Text is all there for missed', () => {
  render(Result, { shape: 'Circle', ratio: 1.2, isReset: false });
  expect(screen.getByText('Missed!')).toBeInTheDocument();
  expect(
    screen.getByText('The circle is now 1.2 times its original size')
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /Try again/i })
  ).toBeInTheDocument();
});

test('Text is all there for close', () => {
  render(Result, { shape: 'Circle', ratio: 1.9, isReset: false });
  expect(screen.getByText('Close!')).toBeInTheDocument();
  expect(
    screen.getByText('The circle is now 1.9 times its original size')
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /Try again/i })
  ).toBeInTheDocument();
});

test('Text is all there for spot-on', () => {
  render(Result, { shape: 'Circle', ratio: '2.0', isReset: false });
  expect(screen.getByText('Well done!')).toBeInTheDocument();
  expect(
    screen.getByText('The circle is now 2.0 times its original size')
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /Try again/i })
  ).toBeInTheDocument();
});
