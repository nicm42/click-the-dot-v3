/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte'
import Instructions from './Instructions.svelte';

test('Text is correct when no shape has been selected', () => {
  const {getByText} = render(Instructions, {shape: 'shape'})
  expect(getByText('Select a shape.')).toBeInTheDocument()
})