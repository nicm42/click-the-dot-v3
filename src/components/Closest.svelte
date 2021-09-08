<script lang="ts">
  export let shapes: string[];
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
        <span class="score" id="score-circle">4.0</span>
      </div>
    {/each}
  </div>
  <div id="clear-container">
    <button class="clear">Clear scores</button>
  </div>
</div>
