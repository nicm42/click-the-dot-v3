<script lang="ts">
  export let ratio: string;
  export let reset: Boolean;

  let resultTextStart = 'Missed!';
  if (ratio === '2.0') {
    resultTextStart = 'Well done!';
  } else if (parseFloat(ratio) >= 1.9 && parseFloat(ratio) <= 2.1) {
    resultTextStart = 'Close!';
  }

  const resetShape = () => {
    reset = true;
  }
</script>

<div class="result">
  <p class="result__text">
    {resultTextStart}
  </p>
  <p class="result__text">
    The shape is now {ratio} times its original size
  </p>
  <button class="result__button" on:click={resetShape}>Try again</button>
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
      padding: 0.5em 1.5em;
      background-color: var(--secondaryColour);
      color: var(--backgroundColour);

      &:hover,
      &:focus,
      &:active {
        background-color: var(--activeColour);
      }
    }
  }
</style>
