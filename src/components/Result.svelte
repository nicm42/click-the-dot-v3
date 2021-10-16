<script lang="ts">
  import { fade } from 'svelte/transition';

  export let ratio: string;
  export let isReset: Boolean;
  export let isShowingScores: boolean;

  let resultTextStart = 'Missed!';
  if (ratio === '2.0') {
    resultTextStart = 'Well done!';
  } else if (parseFloat(ratio) >= 1.9 && parseFloat(ratio) <= 2.1) {
    resultTextStart = 'Close!';
  }
</script>

<div in:fade class="result">
  <p class="result__text">
    {resultTextStart}
  </p>
  <p class="result__text">
    The shape is now {ratio} times its original size
  </p>
  <button class="result__button" on:click={() => isReset = true}>Try again</button>
  {#if !isShowingScores && ratio === '2.0'}
    <button class="result__scores" on:click={() => isShowingScores = true}>Show high scores</button>
  {/if}
</div>

<style lang="scss">
  .result {
    grid-area: result;
    margin-block: var(--elementGap);
    font-weight: 700;

    &__text {
      margin-block: 0em;
    }

    &__button {
      margin-inline-start: 0.5em;
      padding: 0.5em 1.5em;
      background-color: var(--secondaryColour);
      color: var(--backgroundColour);

      &:hover,
      &:focus,
      &:active {
        background-color: var(--activeColour);
      }
    }

    &__scores {
      margin-inline-start: 0.5em;
      padding: 0.5em;
      background-color: var(--backgroundColour);
      color: var(--primaryColour);

      &:hover,
      &:active {
        background-color: var(--darkerBackgroundColour);
      }
    }
  }
</style>
