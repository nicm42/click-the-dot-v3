<script lang="ts">
  import { tweened } from '../utils/pausableTween';
  import { linear } from 'svelte/easing';

  import Circle from './shapes/Circle.svelte';
  import Square from './shapes/Square.svelte';
  import Triangle from './shapes/Triangle.svelte';

  export let shape: string;
  let clicked: number = 0;

  const size = tweened(1, {
		duration: 3000,
		easing: linear
	});

  const handleShapeClick = ():void => {
    clicked += 1
    if (clicked === 1) {
      size.set(3);
    }
    if (clicked === 2) {
      size.pause();
    }
  }

</script>

<div class="shape-container">
  <svg
    class="shape-svg"
    width="100px"
    height="100px"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="shape-title"
    aria-describedby="shape-desc"
    on:click={handleShapeClick}
    style="transform: scale({$size});"
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
    class="helper-svg {clicked === 2 ? 'show' : ''}"
    width="100px"
    height="100px"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="helper-title"
    aria-describedby="helper-desc"
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

/* .shape-svg {
  cursor: pointer;
} */

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