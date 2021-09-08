<script lang="ts">
  import Circle from './shapes/Circle.svelte';
  import Square from './shapes/Square.svelte';
  import Triangle from './shapes/Triangle.svelte';

  export let shape: string;
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
    class="helper-svg"
    width="100px"
    height="100px"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="helper-title"
    aria-describedby="helper-desc"
  >
    <title id="helper-title">Helper shape</title>
    <desc id="helper-desc">The original size of the shape to show you how close you got to twice the size</desc>
    {#if shape === 'Circle'}
      <Circle isShape={false} />
    {/if}
    {#if shape === 'Square'}
      <Square isShape={false} />
    {/if}
    {#if shape === 'Triangle'}
      <Triangle isShape={false} />
    {/if}
  </svg>
</div>

