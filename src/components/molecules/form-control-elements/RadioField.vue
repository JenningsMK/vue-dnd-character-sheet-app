<template>
	<div :class="$style['form-element']">
		<form-label
			:id="id"
			:type="'radio'"
		>
			<input-radio
				:id="id"
				:name="name"
				:value="value"
				:checked="checked"
			/>

			{{ label }}
		</form-label>
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
