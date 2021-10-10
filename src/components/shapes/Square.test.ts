/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import Square from './Square.svelte';

test('Square exists', () => {
  render(Square);
  expect(screen.getByTestId('square')).toBeInTheDocument();
});
