/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import Scores from './Scores.svelte';

test('Initial text is all there', () => {
  render(Scores, { shape: 'Circle', isShowingScores: true });
  expect(screen.getByText('Fewest attempts for Circle')).toBeInTheDocument();
  expect(screen.getByText('Loading scores')).toBeInTheDocument();
});
