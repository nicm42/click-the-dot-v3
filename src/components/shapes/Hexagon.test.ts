/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import Hexagon from './Hexagon.svelte';

test('Hexagon exists for shape', () => {
  render(Hexagon);
  expect(screen.getByTestId('hexagon')).toBeInTheDocument();
});
