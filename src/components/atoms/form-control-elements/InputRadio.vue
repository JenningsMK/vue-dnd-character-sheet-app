<template>
	<input
		:id="`labeled-by:${id}`"
		class="u-visually-hidden"
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
