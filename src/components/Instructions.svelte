<script lang="ts">
  export let shape: string;
</script>

<div class="instructions">
  {#if shape === 'shape'}
    <p>Select a shape.</p>
  {/if}
  <p>Click the {shape}.</p>
  <p>Click it again when it's twice the size.</p>
</div>
