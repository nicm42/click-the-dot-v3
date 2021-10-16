<script lang="ts">
  import { fade } from 'svelte/transition';
  import { clickOutside } from '../utils/clickOutside';
    
  import * as data from '../dummyScores.json';

  export let shape: string;
  export let isShowingScores: boolean;

  const port = 8000;
  //let shapeData: {_id: string, shape: string, name: string, score: number}[] = [];
  let sortedData: {_id: string, shape: string, name: string, score: number}[] = [];

  const getHighScores = async () => { 
    //try {
      const link = 'http://localhost:';
      const route = '/getscores';
      //const response = await fetch(link + port + route);
      //const data = await response.json();
      //console.log(data.default);
      // Get the data from this shape only
      //shapeData = data.filter((key: string) => key.shape === shape);
      const shapeData = data.default.filter((key: string) => key.shape === shape);
      console.log(shapeData);
      // Sort it by score order, so 1 is first
      // But we only want to show the first 10
      sortedData = shapeData.sort((a: any, b: any) => a.score - b.score).slice(0, 10);
      console.log(sortedData);
      
      //if(response.ok) {
        return sortedData;
      //} else {
        //throw new Error();
      //}
    //} catch (error) {
      //console.log(error);
    //}
  }

  const handleKeyPress = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      closeScores();
    }
  };

  const closeScores = () => {
    isShowingScores = false;
  }

  let loadingMessage: string = 'Loading scores';
  const addDots = () => loadingMessage += '.';
  setInterval(addDots, 1000);

  const highScores = getHighScores();
</script>

<svelte:window on:keydown={handleKeyPress}/>
<div in:fade={{ delay: 500 }} out:fade class="scores"  use:clickOutside on:click_outside={closeScores}>
  <button class="scores__close" title="Close" on:click={closeScores}>x</button>
  <h2 class="scores__title">Fewest attempts for {shape}</h2>
  {#await highScores}
    <p>{loadingMessage}</p>
    {:then sortedData}
      {#if sortedData.length === 0}
        <p>No attempts yet. Play some more and be the first!</p>
      {:else}
      <table class="scores__table">
        <th class="scores__header">Name</th>
        <th class="scores__header">Attempts</th>
        {#each sortedData as data}
          <tr class="scores__row">
            <td class="scores__element">{data.name}</td>
            <td class="scores__element">{data.score}</td>
          </tr>
        {/each}
      </table>
      {/if}
    {:catch error}
      <p>Can't get scores. Something went wrong :(</p>
  {/await}
</div>

<style lang="scss">
  .scores {
    position: absolute;
    width: max-content;
    max-width: 80vw;
    inset-inline-start: 50%;
    inset-block-start: 2em;
    padding: 1em;
    transform: translateX(-50%);
    background-color: var(--backgroundColour);
    border-radius: var(--borderRadius);
    box-shadow: var(--boxShadow);
    z-index: 2; // So it goes on top of overlay

    &__close {
      position: absolute;
      // Position it in the padding
      inset-block-start: -1em;
      inset-inline-end: 0;
      background-color: transparent;
      color: red;
      font-weight: 700;
      font-size: 1.5rem;
      box-shadow: none;

      &:focus,
      &:hover {
        transform: scale(1.1);
      }

      &:active {
        background-color: transparent;
      }
    }

    &__title {
      margin-block-start: 0;
      color: var(--primaryColour);
    }

    &__table {
      position: relative;
      inset-inline-start: 50%;
      transform: translateX(-50%);
      border-collapse: collapse;
    }

    &__header {
      padding-inline: 1em;
      font-weight: 700;
    }

    &__row {
      border-block-start: 1px solid var(--secondaryColour);
    }

    &__element {
      padding: 0.5em;
    }
  }
</style>
