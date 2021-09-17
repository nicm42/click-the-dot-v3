<script lang="ts">
  export let shape: string;
</script>

<div class="instructions">
  {#if shape === 'shape'}
    <p>Select a shape.</p>
  {/if}
  <p>Click the {shape.toLowerCase()}.</p>
  <p>Click it again when it's twice the size.</p>
</div>

<style lang="scss">
  @import '../styles';

  .instructions {
    grid-area: instructions;
    @include top-bottom-padding(1rem);
    font-size: $big-text;
  }
</style>
