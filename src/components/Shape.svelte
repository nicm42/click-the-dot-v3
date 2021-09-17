<script lang="ts">
  import { tweened } from '../utils/pausableTween';
  import { linear } from 'svelte/easing';

  import Circle from './shapes/Circle.svelte';
  import Square from './shapes/Square.svelte';
  import Triangle from './shapes/Triangle.svelte';

  export let shape: string;
  export let finishedGrowing: boolean;
  export let ratio: number;

  let clicked: boolean = false;
  let initialSize: number = 100;
  let tweenDuration = 3000;

  const grow = tweened(1, {
		duration: tweenDuration,
		easing: linear
	});

  const handleShapeClick = ():void => {
    if (!clicked) {
      clicked = true;
      grow.set(3);

      // When it's finished, we want to do the same thing as we do when we click again,
      // but we can't just listen to $grow becoming 3.
      // So instead we'll set a timer for the same time as the duration of the tween
      // as it doesn't matter too much when this happens, as they've definitely missed 2.0
      const timer = setTimeout(() => {
        finishedGrowing = true;
        ratio = $grow;
        clearInterval(timer);
      }, tweenDuration);
    } else {
      grow.pause();
      finishedGrowing = true;
      ratio = $grow;
    }
  }

</script>

<div class="shape-container">
  <svg
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
      <Circle isShape={true} />
    {/if}
    {#if shape === 'Square'}
      <Square isShape={true} />
    {/if}
    {#if shape === 'Triangle'}
      <Triangle isShape={true} />
    {/if}
  </svg>
  <svg
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
      <Circle isShape={false}/>
    {/if}
    {#if shape === 'Square'}
      <Square isShape={false} />
    {/if}
    {#if shape === 'Triangle'}
      <Triangle isShape={false} />
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