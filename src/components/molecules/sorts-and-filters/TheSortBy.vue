<template>
	<form :class="$style['sort-by']">
		<fieldset>
			<legend>Sort by</legend>

			<div :class="$style['radio-container']">
				<radio-field
					id="sort-by-name"
					label="Name"
					name="sort-by"
					value="character-name"
				/>

				<radio-field
					id="sort-by-creation"
					label="Created"
					name="sort-by"
					value="date-of-creation"
				/>

				<radio-field
					id="sort-by-modified"
					label="Modified"
					name="sort-by"
					value="Last-modified"
				/>

				<radio-field
					id="sort-by-level"
					label="Level"
					name="sort-by"
					value="character-level"
				/>
			</div>
		</fieldset>
	</form>
</template>

<script>
import RadioField from '@/components/molecules/form-control-elements/RadioField';

export default {
  name: 'SortBy',

  components: {
    RadioField
  }
};
</script>

<style module>
.sort-by {
	font-size: .8rem
}

.sort-by fieldset {
	border: none;
	margin: 0;
	padding: 0;
}

.sort-by legend {
	margin-left: 0;
	padding: 0;
}

.radio-container {
	display: flex;
	justify-content: space-between;
}

.radio-container label {
	padding-top: 0;
}
</style>
