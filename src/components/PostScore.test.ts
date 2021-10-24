/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/svelte';
import PostScore from './PostScore.svelte';

test('Text is all there', () => {
  const sortedData = [
    {
      shape: 'Circle',
      name: 'Nic',
      attempts: 1,
    },
  ];
  render(PostScore, {
    shape: 'Circle',
    sortedData: sortedData,
    isPosted: false,
    name: 'Nic',
  });
  expect(screen.getByText('Congratulations')).toBeInTheDocument();
  expect(
    screen.getByText('You got the circle to be twice its original size in 0 attempts')
  ).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByLabelText('Name')).toBeInTheDocument();
  expect(
    screen.getByText('Add your name to the high scores')
  ).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
});

test('Submitting should show loading message', () => {
  const sortedData = [
    {
      shape: 'Circle',
      name: 'Nic',
      attempts: 1,
    },
  ];
  render(PostScore, {
    shape: 'Circle',
    sortedData: sortedData,
    isPosted: false,
    name: 'Nic',
  });
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'test' } });
  expect(input).toHaveValue('test');
  const button = screen.getByRole('button', { name: /Submit/i });
  fireEvent.click(button);
  waitFor(() => expect(screen.getByText('Submitting score')).toBeInTheDocument());
});
