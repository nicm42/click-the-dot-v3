<script lang="ts">
</script>

	<div class="result">Some text here<span class="result-text"></span>
		<div class=reset-container>
			<button class="reset">Try again</button>
		</div>
	</div>


<style lang="scss">
  @import '../styles';

.result {
	grid-area: result;
	display: flex;
	flex-direction: column;
	@include top-bottom-padding(1rem);
	font-weight: bold;
}

.reset-container {
	@include top-bottom-padding(1rem);
}

.reset {
	@include button;
	padding: 0.5em 1.5em;
	font-size: $small-text;
	color: $background-colour;
	background-color: $secondary-colour;
	border: $secondary-colour;
	//visibility: hidden; //hide reset button until transition has finished

	&:hover, &:active {
		background-color: darken($secondary-colour, 10%);	
	}

	&:active {
		top: 2px;
	}
}
</style>