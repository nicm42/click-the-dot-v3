/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import Heart from './Heart.svelte';

test('Hexagon exists for shape', () => {
  render(Heart);
  expect(screen.getByTestId('heart')).toBeInTheDocument();
});
