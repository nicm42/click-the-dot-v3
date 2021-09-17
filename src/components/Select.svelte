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

<style lang="scss">
  @import '../styles';

  .select-shape-container {
    grid-area: options;
  }

  .select-shape {
    padding: 0.2rem;
    padding-right: 1.6rem; //make sure there's space for the dropdown arrow
    @include set-text; //for some reason it doesn't pick up the font from the body
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
    border: 1px solid $primary-colour;
    border-radius: 0.2em;
    background-color: $background-colour;
    background: url('../images/chevron-down-outline.svg');
    background-size: 1.5rem 1.5rem;
    background-position: right center;
    background-repeat: no-repeat;
    appearance: none; //hides native dropdown arrow so we don't get both
  }

  //So it hides the dropdown arrow in IE
  .select-shape::-ms-expand {
    display: none;
  }

  //To make sure it's not so massive in Firefox that the dropdown is wider than the select
  option {
    font-size: $small-text;
  }
</style>
