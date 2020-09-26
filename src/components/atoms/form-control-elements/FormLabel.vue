<template>
	<label :for="`labeled-by:${id}`">
		{{ label }}
	</label>
</template>

<script>
export default {
  name: 'FormLabel',

  props: {

    id: {
      type: String,
      required: true
    },

    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>

</style>
