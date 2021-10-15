<script lang="ts">
  // Dummy data so we don't have to go to the database all the time
  const data = [
    {
      _id: "6169d0519f7f643056967cb5",
      shape: 'Circle',
      name: 'Nic',
      score: 10
    },
    {
      _id: "6169d0779f7f643056967cb6",
      shape: 'Circle',
      name: 'Nic2',
      score: 5
    },
    {
      _id: "6169d0919f7f643056967cb7",
      shape: 'Square',
      name: 'Nic',
      score: 3
    }
  ];

  export let shape: string;
  export let showScores: boolean;

  const port = 8000;
  let shapeData: {_id: string, shape: string, name: string, score: number}[] = [];

  const highscores = async () => { 
    try {
      const link = 'http://localhost:';
      const route = '/getscores';
      //const response = await fetch(link + port + route);
      //const data = await response.json();
      //console.log(data);
      shapeData = data.filter((key: string) => key.shape === shape);
      console.log(shapeData);
      //showScores = false;
    } catch (error) {
      console.log(error);
    }
  }

  highscores();
</script>

<div class="scores">
  {#each shapeData as data}
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
