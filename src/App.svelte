<script lang="ts">
  import Instructions from './components/Instructions.svelte';
  import Select from './components/Select.svelte';
  import Shape from './components/Shape.svelte';
  import Closest from './components/Closest.svelte';
  import Result from './components/Result.svelte';

  const shapes: string[] = ['Circle', 'Square', 'Triangle'];
  let shape: string = 'shape';
  let finishedGrowing: boolean = false;
  // ratio needs to be a string so it'll keep the 0 after the decimal point if there is one
  // and will be a string from localStorage,
  // so might as well make it a string
  // and only convert it to a number if we need to do maths on it
  let ratio: string = '3.0';
  let initialSize: number = 100;
  let reset: Boolean = false;

  type ScoresType = {
    [key: string]: string;
  };

  let scores: ScoresType = shapes.reduce(
    (score, shape) =>
      Object.assign(score, { [shape]: localStorage.getItem(shape) }),
    {}
  );

</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<main>
  <Instructions {shape} />
  <Select {shapes} bind:selectedShape={shape} bind:reset bind:initialSize />
  <Shape {shape} bind:finishedGrowing bind:ratio bind:scores bind:reset bind:initialSize />
  {#if finishedGrowing}
    <Result {ratio} bind:reset />
  {/if}
  <Closest {shapes} {scores} />
</main>

<style lang="scss">
  @import './styles';

  :root {
    --primaryColour: hsl(208, 84%, 14%);
    --secondaryColour: hsl(208, 69%, 42%);
    --activeColour: hsl(208, 69%, 32%);
    --backgroundColour: hsl(0, 0%, 98%);
    --shapeColour: hsl(353, 100%, 74%);
  }

  :global(body) {
    height: 100%;
    padding: 1em;
    background-color: var(--backgroundColour);
    font-family: 'Ubuntu', sans-serif;
    font-size: 100%;
    line-height: 1.5;
    text-align: center;

    @media (min-width: $breakpoint-medium) {
      display: grid;
      grid-template-areas:
        'instructions instructions'
        'options container'
        'highscores container'
        'result result';
      grid-template-columns: 1fr, 2fr;
    }

    @media (min-width: $breakpoint-big) {
      grid-template-areas:
        '. instructions .'
        'options container highscores'
        '. result .';
      grid-template-columns: 1fr, 2fr, 1fr;
    }
  }
</style>
