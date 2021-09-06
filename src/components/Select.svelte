<script lang="ts">
  export let selectedShape: string;

  let shapes: string[] = ['circle', 'square', 'triangle'];
</script>

<div class="select-shape-container">
  <select
    name="select-shape"
    class="select-shape"
    aria-label="Select a shape"
    bind:value={selectedShape}
  >
    <option disabled selected value aria-hidden="true">Select a shape</option>
    {#each shapes as shape}
      <option value={shape}>{shape}</option>
      <!-- Text should have initial capital letter -->
    {/each}
  </select>
</div>
