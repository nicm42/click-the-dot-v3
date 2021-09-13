<script lang="ts">
  import Instructions from './components/Instructions.svelte';
  import Select from './components/Select.svelte';
  import Shape from './components/Shape.svelte';
  import Closest from './components/Closest.svelte';
  import Result from './components/Result.svelte';

  const shapes: string[] = ['Circle', 'Square', 'Triangle'];
  let shape: string = 'shape';
</script>

<main>
  <Instructions {shape} />
  <Select {shapes} bind:selectedShape={shape} />
  <Shape {shape} />
  <Closest {shapes} />
  <Result />
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
											"instructions instructions"
											"options container"
											"highscores container"
											"result result";
		grid-template-columns: 1fr, 2fr;
	}

	@media (min-width: $breakpoint-big) {
		grid-template-areas:
											". instructions ."
											"options container highscores"
											". result .";
		grid-template-columns: 1fr, 2fr, 1fr;
	}
}
</style>
