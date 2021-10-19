/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/svelte';
import Scores from './Scores.svelte';

test('Text is all there', () => {
  render(Scores, { shape: 'Circle', isShowingScores: true });
  expect(screen.getByText('Fewest attempts for Circle')).toBeInTheDocument();
  expect(screen.getByText('Loading scores')).toBeInTheDocument();
});
