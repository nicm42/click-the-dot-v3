<script lang="ts">
  import getRandomIntInclusive from '../utils/getRandomIntInclusive';

  export let selectedShape: string;
  export let shapes: string[];
  export let reset: Boolean;
  export let initialSize: number;
  let value: string = '';

  const setShape = (event: any): void => {
    selectedShape = event.currentTarget.value;
    initialSize = getRandomIntInclusive(50, 100);
    reset = true;
  };
</script>

<div class="select">
  <select
    data-testid="select"
    name="select-shape"
    class="select__select"
    aria-label="Select a shape"
    bind:value
    on:change={setShape}
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
  .select {
    grid-area: select;

    &__select {
      padding: 0.2em;
      padding-inline-end: 1.6rem; //make sure there's space for the dropdown arrow
      font-family: 'Ubuntu', sans-serif;
      font-size: 1em;
      color: var(--darkBlue);
      box-shadow: 0.15em 0.15em 0.5em 0 rgba(0, 0, 0, 0.05);
      border: 1px solid var(--primaryColour);
      border-radius: 0.2em;
      background-color: var(--backgroundColour);
      background: url('../images/chevron-down-outline.svg');
      background-size: 1.5rem 1.5rem;
      background-position: right center;
      background-repeat: no-repeat;
      appearance: none; //hides native dropdown arrow so we don't get both
    }
  }

  //To make sure it's not so massive in Firefox that the dropdown is wider than the select
  option {
    font-size: 0.9rem;
  }
</style>
