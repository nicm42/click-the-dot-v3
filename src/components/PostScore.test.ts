/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/svelte';
import PostScore from './PostScore.svelte';

test('Text is all there', () => {
  const sortedData = [{
    shape: 'Circle',
    name: 'Nic',
    attempts: 1
  }]
  render(PostScore, { shape: 'Circle', sortedData: sortedData, isPosted: false, name: 'Nic' });
  expect(screen.getByText('Congratulations')).toBeInTheDocument();
  expect(screen.getByText('The circle is now 2.0 times its original size')).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByLabelText('Name')).toBeInTheDocument();
  expect(screen.getByText('Add your name to the high scores')).toBeInTheDocument();
    expect(
    screen.getByRole('button', { name: /Submit/i })
  ).toBeInTheDocument();

});

/* test('Submitting should show loading message', () => {
  const sortedData = [{
    shape: 'Circle',
    name: 'Nic',
    attempts: 1
  }]
  render(PostScore, { shape: 'Circle', sortedData: sortedData, isPosted: false, name: 'Nic' });
  expect(screen.getByRole('textbox')).toBeInTheDocument();

    fireEvent.change(screen.getByTestId('select'), {
    target: { value: 'Heart' },
  });
    expect(screen.getByRole('input', { name: 'the-inputs-id' })).toHaveValue('test');

  expect(screen.getByText('Congratulations')).toBeInTheDocument();
  expect(screen.getByText('The circle is now 2.0 times its original size')).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Add your name to the high scores')).toBeInTheDocument();
    expect(
    screen.getByRole('button', { name: /Submit/i })
  ).toBeInTheDocument();

});
 */