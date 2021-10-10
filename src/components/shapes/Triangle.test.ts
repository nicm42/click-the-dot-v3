/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import Triangle from './Triangle.svelte';

test('Triangle exists', () => {
  render(Triangle);
  expect(screen.getByTestId('triangle')).toBeInTheDocument();
});
