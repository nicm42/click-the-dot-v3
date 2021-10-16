<script lang="ts">
  import Instructions from './components/Instructions.svelte';
  import Select from './components/Select.svelte';
  import Shape from './components/Shape.svelte';
  import Closest from './components/Closest.svelte';
  import Result from './components/Result.svelte';
  import Scores from './components/Scores.svelte';

  const shapes: string[] = [
    'Circle',
    'Heart',
    'Hexagon',
    'Square',
    'Star',
    'Triangle',
  ];
  let shape: string = 'shape';
  let isFinishedGrowing: boolean = false;
  // ratio needs to be a string so it'll keep the 0 after the decimal point if there is one
  // and will be a string from localStorage,
  // so might as well make it a string
  // and only convert it to a number if we need to do maths on it
  let ratio: string = '3.0';
  let initialSize: number = 100;
  let isReset: boolean = false;
  let isShowingScores: boolean = false;

  type ScoresType = {
    [key: string]: string;
  };

  type AttemptsType = {
    [key: string]: number;
  };

  let scores: ScoresType = shapes.reduce(
    (score, shape) =>
      Object.assign(score, { [shape]: localStorage.getItem(shape) }),
    {}
  );

  let attempts: AttemptsType = shapes.reduce(
    (attempt, shape) =>
      Object.assign(attempt, { [shape]: localStorage.getItem(shape) }),
    {}
  );

  let attemptsCount: AttemptsType = shapes.reduce(
    (attempt, shape) =>
      Object.assign(attempt, { [shape]: 0 }),
    {}
  );
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"
    rel="stylesheet"
  />

  <title>Click the Shape</title>
</svelte:head>

{#if isShowingScores}
  <div class="overlay"></div>
{/if}

<main>
  <h1>Click the Shape</h1>
  <Instructions {shape} />
  <Select {shapes} bind:selectedShape={shape} bind:isReset bind:initialSize />
  <Shape
    {shape}
    bind:isFinishedGrowing
    bind:ratio
    bind:scores
    bind:attempts
    bind:attemptsCount
    bind:isReset
    bind:initialSize
    bind:isShowingScores
  />
  {#if isFinishedGrowing}
    <Result {ratio} bind:isReset bind:isShowingScores />
  {/if}
  <Closest {shapes} {scores} />
  {#if isShowingScores}
    <Scores {shape} bind:isShowingScores />
  {/if} 
</main>

<style lang="scss">
  :root {
    --primaryColour: hsl(208, 84%, 14%);
    --secondaryColour: hsl(208, 69%, 42%);
    --activeColour: hsl(208, 69%, 32%);
    --backgroundColour: hsl(0, 0%, 98%);
    --darkerBackgroundColour: hsl(0, 0%, 88%);
    --shapeColour: hsl(353, 100%, 74%);

    --elementGap: 0.33em;
    --borderRadius: 0.2em;
    --boxShadow: 0 0.3em 0.75em -0.3em rgba(0, 0, 0, 0.5);
  }

  :global(body) {
    height: 100%;
    padding: 1em;
    background-color: var(--backgroundColour);
    font-family: 'Ubuntu', sans-serif;
    font-size: 100%;
    line-height: 1.5;
    text-align: center;
  }

  main {
    @media (min-width: 37.5rem) {
      display: grid;
      grid-template-columns: min-content, auto;
      grid-template-rows: repeat(5, auto);
      grid-template-areas:
        '. header'
        '. instructions'
        'select shape'
        'closest shape'
        '. result';
    }
    place-content: center;
    column-gap: 4em;

    h1 {
      grid-area: header;
    }
  }

  :global(button) {
    position: relative;
    margin-block-start: 0.5em;
    border: 0;
    border-radius: var(--borderRadius);
    box-shadow: var(--boxShadow);
    cursor: pointer;

    &:active {
      inset-block-start: 0.125rem;
      box-shadow: none;
    }
  }

  .overlay {
    content:"";
    position:fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.25);
    pointer-events: none;
    z-index: 1;
  }
</style>
