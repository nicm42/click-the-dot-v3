<script lang="ts">
  export let shapeType: string;

  let shapeClass: string;
  let shapeID: string;
  if (shapeType === 'shape') {
    shapeClass = 'shape';
    shapeID = 'square';
  } else if (shapeType === 'helper') {
    shapeClass = 'helper';
    shapeID = 'helper-square';
  } else {
    shapeClass = '';
    shapeID = '';
  }
</script>

<rect class={shapeClass} id={shapeID} x="0" y="0" width="100%" height="100%" />
