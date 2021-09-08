<script lang="ts">
  export let isShape: Boolean;

  let shapeClass: string;
  let shapeID: string;
  if (isShape) {
    shapeClass = 'shape';
    shapeID = 'circle';
  } else {
    shapeClass = 'helper';
    shapeID = 'helper-circle';
  }
</script>

<circle class={shapeClass} id={shapeID} cx="50%" cy="50%" r="50%" />

