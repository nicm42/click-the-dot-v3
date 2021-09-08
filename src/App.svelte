<script lang="ts">
  import Instructions from './components/Instructions.svelte';
  import Select from './components/Select.svelte';
  import Shape from './components/Shape.svelte';
  import Closest from './components/Closest.svelte';

  const shapes: string[] = ['Circle', 'Square', 'Triangle'];
  let shape: string = 'shape';
</script>

<main>
  <Instructions {shape} />
  <Select {shapes} bind:selectedShape={shape} />
  <Shape {shape} />
  <Closest {shapes} />
</main>

<style lang="scss">
  main {
    //text-align: center;
    padding: 1em;
    //max-width: 240px;
    //margin: 0 auto;
  }

  /* h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
    @media (min-width: 640px) {
      color: purple;
    }
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	} */
</style>
