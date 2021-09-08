<script lang="ts">
  export let isShape: Boolean;

  let shapeClass: string;
  let shapeID: string;
  if (isShape) {
    shapeClass = 'shape';
    shapeID = 'triangle';
  } else {
    shapeClass = 'helper';
    shapeID = 'helper-triangle';
  }
</script>

<polygon class={shapeClass} id={shapeID} points="50, 0, 100, 100, 0, 100" />
