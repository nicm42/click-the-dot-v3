<script lang="ts">
  import { tweened } from '../utils/pausableTween';
  import { linear } from 'svelte/easing';

  import Circle from './shapes/Circle.svelte';
  import Square from './shapes/Square.svelte';
  import Triangle from './shapes/Triangle.svelte';
  import getRandomIntInclusive from '../utils/getRandomIntInclusive';

  export let shape: string;
  export let reset: Boolean;

  export let finishedGrowing: boolean;
  export let ratio: string;
  export let scores: ScoresType;
  export let initialSize: number;

  type ScoresType = {
    [key: string]: string;
  };

  let clicked: boolean = false;
  let tweenDuration = getRandomIntInclusive(2000, 7000);

  const grow = tweened(1, {
    duration: tweenDuration,
    easing: linear,
  });

  let timer: ReturnType<typeof setTimeout>;

  const handleShapeClick = (): void => {
    console.log('Running handleShapeClick')
    reset = false;
    if (!finishedGrowing) {
      if (!clicked) {
        clicked = true;
        grow.set(3);

        // When it's finished, we want to do the same thing as we do when we click again,
        // but we can't just listen to $grow becoming 3.
        // So instead we'll set a timer for the same time as the duration of the tween
        // as it doesn't matter too much when this happens, as they've definitely missed 2.0
        timer = setTimeout(() => {
          console.log('In timer')
          finishedShapeTween();
        }, tweenDuration);
      } else {
        grow.pause();
        finishedShapeTween();
      }
    }
  };

  const finishedShapeTween = () => {
    console.log('Running finishedShapeTween')
    clearInterval(timer);
    finishedGrowing = true;
    ratio = $grow.toFixed(1);
    console.log(finishedGrowing, $grow, ratio)

    // First get the current high score for this shape
    // Then check if this is closer to 2.0
    // If it is, then add it to localStorage
    let highScore: string = localStorage.getItem(shape);
    let highestScore = ratio;
    if (highScore) {
      highestScore =
        Math.abs(parseFloat(ratio) - 2) < Math.abs(parseFloat(highScore) - 2)
          ? ratio
          : highScore;
    }
    localStorage.setItem(shape, highestScore);
    scores[shape] = highestScore;
  };

  // If reset is true, then it means something has been pressed to reset the shape
  // we can use the pausableTween to set transform scale back to original
  $: if (reset) {
    grow.reset();
    // Now shape will be unlicked and helper won't be shown
    finishedGrowing = false;
    clicked = false;
    // Update these so they'll be different each time
    initialSize = getRandomIntInclusive(50, 100);
    tweenDuration = getRandomIntInclusive(2000, 7000);
  }
</script>

<div class="shape-container">
  <svg
    data-testid="shape-svg"
    class="shape-svg {finishedGrowing ? 'clicked' : ''}"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="shape-title"
    aria-describedby="shape-desc"
    on:click={handleShapeClick}
    style="transform: scale({$grow}); width: {initialSize}px; height: {initialSize}px;"
  >
    <title id="shape-title">Shape</title>
    <desc id="shape-desc">A shape that grows when you click on it</desc>
    {#if shape === 'Circle'}
      <Circle shapeType={'shape'} />
    {/if}
    {#if shape === 'Square'}
      <Square shapeType={'shape'} />
    {/if}
    {#if shape === 'Triangle'}
      <Triangle shapeType={'shape'} />
    {/if}
  </svg>
  <svg
    data-testid="helper-svg"
    class="helper-svg {finishedGrowing ? 'show' : ''}"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="helper-title"
    aria-describedby="helper-desc"
    style="{initialSize}px; height: {initialSize}px;"
  >
    <title id="helper-title">Helper shape</title>
    <desc id="helper-desc"
      >The original size of the shape to show you how close you got to twice the
      size</desc
    >
    {#if shape === 'Circle'}
      <Circle shapeType={'helper'} />
    {/if}
    {#if shape === 'Square'}
      <Square shapeType={'helper'} />
    {/if}
    {#if shape === 'Triangle'}
      <Triangle shapeType={'helper'} />
    {/if}
  </svg>
</div>

<style lang="scss">
  @import '../styles';

  .shape-container {
    grid-area: container;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px; // biggest shape when 3 times the size
    min-width: 300px; // biggest shape when 3 times the size
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .shape-svg {
    cursor: pointer;

    &.clicked {
      pointer-events: none;
      cursor: auto;
    }
  }

  :global(.shape) {
    //visibility: hidden;
    stroke: none;
    fill: $standout-colour;
  }

  .helper-svg {
    display: none; //hiding this here so we can click on the shape without the helper getting in the way
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    &.show {
      display: block;
    }
  }

  :global(.helper) {
    //visibility: hidden; //and then we have to hide this so we an unhide just the relevant one
    fill: $primary-colour;
  }
</style>
