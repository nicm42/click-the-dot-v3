<script lang="ts">
  export let shape: string;
</script>

<div class="instructions">
  {#if shape === 'shape'}
    <h1>Select a shape.</h1>
  {/if}
  <p>Click the {shape.toLowerCase()}.</p>
  <p>Click it again when it's twice the size.</p>
</div>

<style lang="scss">
  .instructions {
    padding-block-end: 1em;

    & h1,
    & p {
      margin-block: 0.33em;
      font-size: 1.3rem;
      font-weight: 400;
      line-height: 1.1;
      color: var(--primaryColour);
    }
  }
</style>
