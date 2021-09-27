<script lang="ts">
  
  export let shapes: string[];
  export let scores: ScoresType;

  type ScoresType = {
    [key: string]: string;
  };

  const clearScores = () => {
    if (confirm('Are you sure you want to clear the closest scores?')) {
      localStorage.clear();
    }
  };
</script>

<div class="highscores-container">
  Closest scores
  <div class="highscores">
    {#each shapes as shape}
      <div class="highscore">
        <svg
          class="highscore-icon"
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
            <circle cx="50%" cy="50%" r="50%" />
          {/if}
          {#if shape === 'Square'}
            <rect x="0" y="0" width="100%" height="100%" />
          {/if}
          {#if shape === 'Triangle'}
            <polygon points="50, 0, 100, 100, 0, 100" />
          {/if}
        </svg>
        {#if scores[shape] !== null && scores[shape] !== '3.0'}
          <span class="score" id="score-circle">{scores[shape]}</span>
        {/if}
      </div>
    {/each}
  </div>
  <div id="clear-container">
    <button on:click={clearScores} class="clear">Clear scores</button>
  </div>
</div>

<style lang="scss">
  @import '../styles';

  .highscores-container {
    grid-area: highscores;
    display: flex;
    flex-direction: column;
    align-items: center;
    @include top-bottom-padding(1rem);
    color: $secondary-colour;
    text-align: left;

    @media (min-width: $breakpoint-medium) {
      align-self: center;
    }
  }

  .highscore {
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }

  .highscore-icon {
    padding-right: 0.2rem;
    fill: $secondary-colour;
  }

  .score {
    //visibility: hidden; //we've put dummy numbers in here so they line up, but need to hide them to start with
  }

  .clear-container {
    padding-top: 0.5rem;
  }

  .clear {
    @include button;
    padding: 0.5em 1em;
    font-size: $smaller-text;
    color: $primary-colour;
    background-color: $background-colour;
    border: $background-colour;

    &:hover,
    &:active {
      background-color: darken($background-colour, 10%);
    }

    &:active {
      top: 2px;
    }

    &:disabled {
      cursor: auto;
      pointer-events: none;
      opacity: 0.5;
    }
  }
</style>
