<script lang="ts">
  import Circle from './shapes/Circle.svelte';
  import Heart from './shapes/Heart.svelte';
  import Hexagon from './shapes/Hexagon.svelte';
  import Square from './shapes/Square.svelte';
  import Star from './shapes/Star.svelte';
  import Triangle from './shapes/Triangle.svelte';

  export let shapes: string[];
  export let scores: ScoresType;
  export let shape: string;
  export let isShowingScores: boolean;

  type ScoresType = {
    [key: string]: string;
  };

  // Check the scores - if they're all blank, then disable the button
  $: isScores = Object.values(scores).some(Boolean);

  const clearScores = () => {
    if (confirm('Are you sure you want to clear the closest scores?')) {
      localStorage.clear();
      // Also need to clear the scores displayed, with uses the object
      // which picked them up from localStorage at the start
      Object.keys(scores).forEach((key) => (scores[key] = ''));
    }
  };
</script>

<div class="highscores">
  <h2>Closest scores</h2>
  <div class="highscores__table">
    {#each shapes as shape}
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        class="highscores__icon"
        aria-labelledby="highscore-{shape.toLowerCase()}-title"
        aria-describedby="highscore-{shape.toLowerCase()}-desc"
      >
        <title id="highscore-{shape.toLowerCase()}-title">{shape} icon</title>
        <desc id="highscore-{shape.toLowerCase()}-desc"
          >Icon for the score for the {shape.toLowerCase()}</desc
        >
        {#if shape === 'Circle'}
          <Circle />
        {/if}
        {#if shape === 'Heart'}
          <Heart />
        {/if}
        {#if shape === 'Hexagon'}
          <Hexagon />
        {/if}
        {#if shape === 'Square'}
          <Square />
        {/if}
        {#if shape === 'Star'}
          <Star />
        {/if}
        {#if shape === 'Triangle'}
          <Triangle />
        {/if}
      </svg>
      <div>
        {#if scores[shape] !== null && scores[shape] !== '3.0'}
          <div
            data-testid="closest-score"
            class="highscores__score"
            id="score-circle"
          >
            {scores[shape]}
          </div>
        {/if}
      </div>
    {/each}
  </div>
  <button on:click={clearScores} class="highscores__clear" disabled={!isScores}
    >Clear scores</button
  >
  {#if shape !== 'shape'}
    <button class="highscores__show" on:click={() => (isShowingScores = true)}
      >Show high scores</button
    >
  {/if}
</div>

<style lang="scss">
  .highscores {
    grid-area: closest;
    color: var(--secondaryColour);

    & h2 {
      margin-block: 1em 0.5em;
      font-size: 1.2rem;
      font-weight: 400;
    }

    &__table {
      position: relative;
      display: grid;
      grid-template-columns: repeat(2, auto);
      grid-template-rows: repeat(6, auto);
      justify-content: center;
      align-items: center;
      row-gap: 0.5em;
      column-gap: 0.25em;
      inset-inline-start: 50%;
      transform: translateX(-50%);
    }

    &__icon {
      padding-inline-end: 0.2rem;
      fill: var(--secondaryColour);
    }

    &__clear {
      padding: 0.5em 1em;
      background-color: var(--backgroundColour);
      font-size: 0.9rem;
      color: var(--primaryColour);

      &:hover,
      &:active {
        background-color: var(--darkerBackgroundColour);
      }

      // Although button is disabled, it doesn't look it, so we need to add some CSS for that
      &:disabled {
        pointer-events: none;
        opacity: 0.5;
        cursor: auto;
      }
    }

    &__show {
      display: block;
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
