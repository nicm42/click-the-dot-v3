<script lang="ts">
  export let shapeType: string;

  let shapeClass: string;
  let shapeID: string;
  if (shapeType === 'shape') {
    shapeClass = 'shape';
    shapeID = 'circle';
  } else if (shapeType === 'helper') {
    shapeClass = 'helper';
    shapeID = 'helper-circle';
  } else {
    shapeClass = '';
    shapeID = '';
  }
</script>

<circle data-testid="circle" class={shapeClass} id={shapeID} cx="50%" cy="50%" r="50%" />
