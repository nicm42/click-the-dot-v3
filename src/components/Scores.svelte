<script lang="ts">
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
      sortedData = shapeData.sort((a, b) => a.score - b.score);
      console.log(sortedData);
    } catch (error) {
      console.log(error);
    }
  }

  highscores();
</script>

<div class="scores">
  {#each sortedData as data}
    <div class="scores__name">{data.name}</div>
    <div class="scores__score">{data.score}</div>
  {/each}
</div>

<style lang="scss">
  .scores {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: min-content;
    justify-content: center;
    align-items: center;
    row-gap: 0.5em;
    column-gap: 0.25em;
    width: 80vw;
    height: 80vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    outline: 1px solid black;
  }
</style>
