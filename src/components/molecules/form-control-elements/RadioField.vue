<template>
	<div class="form-element">
		<form-label
			:id="id"
			:label="label"
		/>

		<input-radio
			:id="id"
			:name="name"
			:value="value"
			:checked="false"
		/>
	</div>
</template>

<script>
  import FormLabel from '@/components/atoms/form-control-elements/FormLabel';
  import InputRadio from '@/components/atoms/form-control-elements/InputRadio';

export default {
name: "RadioField",
  components: {
  InputRadio,
    FormLabel
  },

  props: {

    id: {
      type: String,
      required: true
    },

    label: {
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
}
</script>

<style scoped>

</style>
