<script lang="ts">
  export let selectedShape: string;
  export let shapes: string[];
  let value: string = '';
</script>

<div class="select-shape-container">
  <select
    name="select-shape"
    class="select-shape"
    aria-label="Select a shape"
    bind:value
    on:change={() => (selectedShape = value)}
  >
    <option disabled selected value aria-hidden="true">Select a shape</option>
    {#each shapes as shape}
      <option value={shape}
        >{shape.charAt(0).toUpperCase() + shape.slice(1)}</option
      >
    {/each}
  </select>
</div>
