<script lang="ts">
  import { fade } from 'svelte/transition';
  import * as data from '../dummyScores.json';

  export let shape: string;
  export let showScores: boolean;

  const port = 8000;
  let shapeData: {_id: string, shape: string, name: string, score: number}[] = [];
  let sortedData: {_id: string, shape: string, name: string, score: number}[] = [];

  const highscores = async () => { 
    try {
      const link = 'http://localhost:';
      const route = '/getscores';
      //const response = await fetch(link + port + route);
      //const data = await response.json();
      //console.log(data.default);
      // Get the data from this shape only
      //shapeData = data.filter((key: string) => key.shape === shape);
      shapeData = data.default.filter((key: string) => key.shape === shape);
      console.log(shapeData);
      // Sort it by score order, so 1 is first
      // But we only want to show the first 10
      sortedData = shapeData.sort((a, b) => a.score - b.score).slice(0, 10);
      console.log(sortedData)
    } catch (error) {
      console.log(error);
    }
  }

  highscores();
</script>

<div class="scores">
  <h2 class="scores__header">Fewest attempts for {shape}</h2>
  <table class="scores__table">
    {#each sortedData as data}
      <tr class="scores__row">
        <td class="scores__name scores__element">{data.name}:</td>
        <td class="scores__score scores__element">{data.score}</td>
      </tr>
    {/each}
  </table>
</div>

<style lang="scss">
  .scores {
    position: absolute;
    width: max-content;
    max-width: 80vw;
    max-height: 80vh;
    inset-inline-start: 50%;
    inset-block-start: 2em;
    padding: 1em;
    transform: translateX(-50%);
    background-color: white;
    outline: 1px solid black;

    &__header {
      margin-block-start: 0;
      color: var(--primaryColour);
    }

    &__table {
      position: relative;
      inset-inline-start: 50%;
      transform: translateX(-50%);
      border-collapse: collapse;
    }

    &__row:not(:first-of-type) {
      border-block-start: 1px solid var(--secondaryColour);
    }

    &__element {
      padding: 0.5em;
    }

    &__name {
      text-align: end;
    }
  }
</style>
