<script lang="ts">
  import Instructions from './components/Instructions.svelte';
  import Select from './components/Select.svelte';
  import Shape from './components/Shape.svelte';
  import Closest from './components/Closest.svelte';
  import Result from './components/Result.svelte';

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
  let isReset: Boolean = false;

  type ScoresType = {
    [key: string]: string;
  };

  let scores: ScoresType = shapes.reduce(
    (score, shape) =>
      Object.assign(score, { [shape]: localStorage.getItem(shape) }),
    {}
  );

  let attempts: ScoresType = shapes.reduce(
    (attempt, shape) =>
      Object.assign(attempt, { [shape]: localStorage.getItem(shape) }),
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
    bind:isReset
    bind:initialSize
  />
  {#if isFinishedGrowing}
    <Result {ratio} bind:isReset />
  {/if}
  <Closest {shapes} {scores} />
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
    border-radius: 0.2em;
    box-shadow: 0 0.3em 0.75em -0.3em rgba(0, 0, 0, 0.5);
    cursor: pointer;

    &:active {
      inset-block-start: 0.125rem;
      box-shadow: none;
    }
  }
</style>
