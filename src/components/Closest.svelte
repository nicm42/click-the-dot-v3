<script lang="ts">
  import Circle from './shapes/Circle.svelte';
  import Square from './shapes/Square.svelte';
  import Triangle from './shapes/Triangle.svelte';

  export let shapes: string[];
  export let scores: ScoresType;

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
  <table>
    {#each shapes as shape}
      <tr class="highscores__table">
        <td class="highscores__icon">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="highscore-circle-title"
            aria-describedby="highscore-circle-desc"
          >
            <title id="highscore-circle-title">{shape} icon</title>
            <desc id="highscore-circle-desc"
              >Icon for the score for the {shape.toLowerCase()}</desc
            >
            {#if shape === 'Circle'}
              <Circle />
            {/if}
            {#if shape === 'Square'}
              <Square />
            {/if}
            {#if shape === 'Triangle'}
              <Triangle />
            {/if}
          </svg>
        </td>
        {#if scores[shape] !== null && scores[shape] !== '3.0'}
          <td
            data-testid="closest-score"
            class="highscores__score"
            id="score-circle">{scores[shape]}</td
          >
        {/if}
      </tr>
    {/each}
  </table>
  <button on:click={clearScores} class="highscores__clear" disabled={!isScores}
    >Clear scores</button
  >
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

    table {
      position: relative;
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
  }
</style>
