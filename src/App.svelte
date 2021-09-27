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

<main>
  <Instructions {shape} />
  <Select {shapes} bind:selectedShape={shape} bind:reset bind:initialSize />
  <Shape {shape} bind:finishedGrowing bind:ratio bind:scores bind:reset bind:initialSize />
  <Closest {shapes} {ratio} {scores} />
  {#if finishedGrowing}
    <Result {ratio} bind:reset />
  {/if}
</main>

<style lang="scss">
  @import './styles';

  :global(*) {
    padding: 0;
    margin: 0;
  }

  :global(body) {
    height: 100%;
    //@include set-text;
    text-align: center;
    background-color: $background-colour;

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
