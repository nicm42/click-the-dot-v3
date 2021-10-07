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
  <p>
    {resultTextStart}
  </p>
  <p>
    The shape is now {ratio} times its original size
  </p>
  <button on:click={resetShape}>Try again</button>
</div>

<style lang="scss">
  @import '../styles';

  .result {
    margin-block: 0.33em;
    font-weight: 700;

    & p {
      margin-block: 0em;
    }

    & button {
      position: relative;
      margin-block-start: 0.5em;
      padding: 0.5em 1.5em;
      background-color: var(--secondaryColour);
      color: var(--backgroundColour);
      border: 0;
      border-radius: 0.2em;
      box-shadow: 0 0.3em 0.75em -0.3em rgba(0,0,0,0.5);
	    cursor: pointer;	

      &:hover,
      &:focus,
      &:active {
        background-color: var(--activeColour);
      }

      &:active {
        top: 0.125rem;
        box-shadow: none;
      }
    }
  }
</style>
