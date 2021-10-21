/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import Star from './Star.svelte';

test('Hexagon exists for shape', () => {
  render(Star);
  expect(screen.getByTestId('star')).toBeInTheDocument();
});
