/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte'
import Circle from './Circle.svelte';

test('Circle exists for shape', () => {
  render(Circle);
  expect(screen.getByTestId('circle')).toBeInTheDocument();
})
