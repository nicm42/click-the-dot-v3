<script lang="ts">
  export let shape: string;
  export let showScores: boolean;

  const port = 8000;

  const highscores = async () => { 
    try {
      const link = 'http://localhost:';
      const route = '/getscores';
      //const response = await fetch(link + port + route);
      //const data = await response.json();
      const data = [
        {
          _id: "6169d0519f7f643056967cb5",
          shape: 'Circle',
          name: 'Nic',
          score: '10'
        },
        {
          _id: "6169d0779f7f643056967cb6",
          shape: 'Circle',
          name: 'Nic2',
          score: '5'
        },
        {
          _id: "6169d0919f7f643056967cb7",
          shape: 'Square',
          name: 'Nic',
          score: '3'
        }
      ];
      //console.log(data);
      const shapeData = data.filter((key: string) => key.shape === shape);
      console.log(shapeData);
      //showScores = false;
    } catch (error) {
      console.log(error);
    }
  }

  highscores();
</script>

<div class="scores">
  Some text in here
</div>

<style lang="scss">
  .scores {
    position: absolute;
    width: 80vw;
    height: 80vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    outline: 1px solid black;
  }
</style>
