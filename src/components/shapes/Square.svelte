<script lang="ts">
  export let isShape: Boolean;

  let shapeClass: string;
  let shapeID: string;
  if (isShape) {
    shapeClass = 'shape';
    shapeID = 'square';
  } else {
    shapeClass = 'helper';
    shapeID = 'helper-square';
  }
</script>

<rect class={shapeClass} id={shapeID} x="0" y="0" width="100%" height="100%" />
