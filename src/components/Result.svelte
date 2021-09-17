<script lang="ts">
  export let ratio: string;

  let resultTextStart = 'Missed!';
  if (ratio === '2.0') {
    resultTextStart = 'Well done!';
  } else if (parseFloat(ratio) >= 1.9 && parseFloat(ratio) <= 2.1) {
    resultTextStart = 'Close!';
  }
</script>

<div class="result">
  <span class="result-text">
    {resultTextStart}
  </span>
  <span class="result-text">
    The shape is now {ratio} times its original size
  </span>
  <div class="reset-container">
    <button class="reset">Try again</button>
  </div>
</div>

<style lang="scss">
  @import '../styles';

  .result {
    grid-area: result;
    display: flex;
    flex-direction: column;
    @include top-bottom-padding(1rem);
    font-weight: bold;
  }

  .reset-container {
    @include top-bottom-padding(1rem);
  }

  .reset {
    @include button;
    padding: 0.5em 1.5em;
    font-size: $small-text;
    color: $background-colour;
    background-color: $secondary-colour;
    border: $secondary-colour;
    //visibility: hidden; //hide reset button until transition has finished

    &:hover,
    &:active {
      background-color: darken($secondary-colour, 10%);
    }

    &:active {
      top: 2px;
    }
  }
</style>
