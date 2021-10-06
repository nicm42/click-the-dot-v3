/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte'
import Result from './Result.svelte';

test('Text is all there', () => {
  render(Result, {ratio: 1.2, reset: false});
  expect(screen.getByText('Missed!')).toBeInTheDocument();
  expect(screen.getByText('The shape is now 1.2 times its original size')).toBeInTheDocument();
  expect(screen.getByRole('button', {name: /Try again/i})).toBeInTheDocument();
})
