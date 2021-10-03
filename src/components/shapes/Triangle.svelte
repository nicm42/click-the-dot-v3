<script lang="ts">
  export let shapeType: string;

  let shapeClass: string;
  let shapeID: string;
  if (shapeType === 'shape') {
    shapeClass = 'shape';
    shapeID = 'triangle';
  } else if (shapeType === 'helper') {
    shapeClass = 'helper';
    shapeID = 'helper-triangle';
  } else {
    shapeClass = '';
    shapeID = '';
  }
</script>

<polygon data-testid="triangle" class={shapeClass} id={shapeID} points="50, 0, 100, 100, 0, 100" />
