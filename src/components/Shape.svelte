<script lang="ts">
  import { tweened } from '../utils/pausableTween';
  import { linear } from 'svelte/easing';

  import Circle from './shapes/Circle.svelte';
  import Heart from './shapes/Heart.svelte';
  import Hexagon from './shapes/Hexagon.svelte';
  import Square from './shapes/Square.svelte';
  import Star from './shapes/Star.svelte';
  import Triangle from './shapes/Triangle.svelte';
  import getRandomIntInclusive from '../utils/getRandomIntInclusive';

  export let shape: string;
  export let isReset: Boolean;

  export let isFinishedGrowing: boolean;
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

  // Watch for it to have finished growing without another click
  $: if ($grow.toFixed(1) === '3.0') finishedShapeTween();

  const handleShapeKeyPress = (e: KeyboardEvent): void => {
    if (e.key === ' ') {
      // Don't want pressing space to page down
      e.preventDefault();
      growShape();
    }
  };

  const handleShapeClick = (e: MouseEvent): void => {
    growShape();
  };

  const growShape = (): void => {
    if (!isFinishedGrowing) {
      isReset = false;
      if (!clicked) {
        clicked = true;
        grow.set(3);
      } else {
        grow.pause();
        finishedShapeTween();
      }
    }
  };

  const finishedShapeTween = () => {
    isFinishedGrowing = true;
    ratio = $grow.toFixed(1);

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

  // If isReset is true, then it means something has been pressed to isReset the shape
  // we can use the pausableTween to set transform scale back to original
  $: if (isReset) {
    grow.reset();
    // Now shape will be unlicked and helper won't be shown
    isFinishedGrowing = false;
    clicked = false;
    // Update these so they'll be different each time
    initialSize = getRandomIntInclusive(50, 100);
    tweenDuration = getRandomIntInclusive(2000, 7000);
  }
</script>

<div class="shape">
  <svg
    data-testid="shape-svg"
    class="shape__svg {isFinishedGrowing ? 'clicked' : ''}"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="shape-title"
    aria-describedby="shape-desc"
    tabindex="0"
    on:click={handleShapeClick}
    on:keypress={handleShapeKeyPress}
    style="transform: scale({$grow}); width: {initialSize}px; height: {initialSize}px;"
  >
    <title id="shape-title">Shape</title>
    <desc id="shape-desc">A shape that grows when you click on it</desc>
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
  <svg
    data-testid="helper-svg"
    class="shape__helper {isFinishedGrowing ? 'show' : ''}"
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
</div>

<style lang="scss">
  .shape {
    grid-area: shape;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px; // biggest shape when 3 times the size
    min-width: 300px; // biggest shape when 3 times the size
    margin-block: 1em;

    &__svg {
      cursor: pointer;

      &.clicked {
        pointer-events: none;
        cursor: auto;
      }
    }

    &__helper {
      display: none; //hiding this here so we can click on the shape without the helper getting in the way
      position: absolute;
      inset: 0;
      margin: auto;

      &.show {
        display: block;
      }
    }
  }

  :global(.shape__svg) {
    stroke: none;
    fill: var(--shapeColour);
  }

  :global(.shape__helper) {
    fill: var(--primaryColour);
  }
</style>
