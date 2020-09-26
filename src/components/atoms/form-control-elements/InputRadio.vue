<template>
	<input
		:id="`labeled-by:${id}`"
		type="radio"
		:name="name"
		:value="value"
		:checked="checked"
	/>
</template>

<script>
export default {
  name: 'InputRadio',

  props: {

    id: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    value: {
      type: String,
      required: true
    },

    checked: {
      type: Boolean,
      required: false
    }
  }
};
</script>

<style scoped>

</style>
