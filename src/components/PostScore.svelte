<script lang="ts">
  import { fade } from 'svelte/transition';
  import postHighScores from '../utils/postHighScores';

  export let shape: string;
  export let sortedData: {
    _id: string;
    shape: string;
    name: string;
    score: number;
  }[];
  export let isPosted: boolean;
  export let name: string = '';

  //console.log(sortedData);

  const attempts: number = Number(sessionStorage.getItem(shape));
  let isFormShowing: boolean = true;
  let isError: boolean = false;

  let loadingMessage: string = 'Submitting score';
  const addDots = () => (loadingMessage += '.');
  setInterval(addDots, 1000);

  const submitScore = async () => {
    isPosted = await postHighScores(shape, name, attempts);
    isFormShowing = false;
    if (!isPosted) {
      isError = true;
    }
  };
</script>

<!-- If array length is less than 10, add this attempt to it
Otherwise, check the last attempt and if this is smaller, add this attempt to it -->
{#if sortedData.length < 10 || sortedData[9].score > attempts}
  <div in:fade={{ delay: 500 }} out:fade class="post">
    <h2 class="post__title">Congratulations</h2>
    {#if isFormShowing}
      <p class="post__details">
        The {shape.toLowerCase()} is now 2.0 times its original size
      </p>
      <p class="post__details">Add your name to the high scores</p>
      <form class="post__form" on:submit|preventDefault={submitScore}>
        <label class="post__label" for="name">Name</label>
        <!-- svelte-ignore a11y-autofocus -->
        <input
          class="post__input"
          type="text"
          name="name"
          id="name"
          placeholder="Type your name"
          required
          autofocus
          bind:value={name}
        />
        <button class="post__button" type="submit">Submit</button>
      </form>
    {:else if isError}
      <p>Can't submit score. Something went wrong :(</p>
    {:else}
      <p>{loadingMessage}</p>
    {/if}
  </div>
{/if}

<style lang="scss">
  .post {
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
    z-index: 3; // So it goes on top of scores

    &__title {
      margin: 0;
      color: var(--primaryColour);
    }

    &__details:first-of-type {
      margin-block-start: 0;
    }

    &__form {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5em;
    }

    &__label {
      font-weight: 700;
    }

    &__input {
      margin-block-end: 0;
    }

    &__button {
      margin-block: 0;
      padding: 0.5em 1.5em;
      background-color: var(--secondaryColour);
      color: var(--backgroundColour);

      &:hover,
      &:focus,
      &:active {
        background-color: var(--activeColour);
      }
    }
  }
</style>
