<template>
	<label
		:for="`labeled-by:${id}`"
		:class="$style['input-label']"
	>
		<slot>You need to fill me in</slot>

		<icon-radio
			v-if="type === 'radio'"
			:class="$style.icon"
			focusable="false"
		/>
	</label>
</template>

<script>
import IconRadio from '../../../assets/icons/radio.svg'

export default {
  name: 'FormLabel',

  components: {
    IconRadio
  },

  props: {

    id: {
      type: String,
      required: true
    },

    type: {
      type: String,
      required: false,
      default: 'text'
    }
  }
};
</script>

<style module>
.input-label {
	align-items: center;
	display: inline-flex;
	cursor: pointer;
	justify-content: space-between;
	padding: calc(var(--font-size) / 2) var(--font-size);
}

.input-label .icon {
	border: 2px solid transparent;
	fill: currentColor;
	height: var(--font-size);
	padding-left: calc(var(--font-size) / 2);
}

/*
	states
*/
/* unchecked/default state */
.input-label .icon circle {
	transform-origin: center;
	animation: unchecked 500ms both;
}

/* checked state */
.input-label input:checked + .icon circle {
	animation: checked 500ms both;
}

.input-label input:focus + .icon circle {
	animation: pulse 1.25s both infinite;
}

@keyframes checked {
	0% {
		opacity: 0;
		transform: scale(0);
	}

	50% {
		opacity: 1;
		transform: scale(1.2);
	}

	75% {
		transform: scale(.5);
	}

	100% {
		transform: scale(.8);
	}

}

@keyframes unchecked {
	0% {
		opacity: 0;
		transform: scale(.5);
	}

	25% {
		opacity: 1;
		transform: scale(1);
	}

	100% {
		opacity: 0;
		transform: scale(0);
	}

}

@keyframes pulse {
	0% {
		transform: scale(.2);
	}

	50% {
		transform: scale(.6);
	}

	100% {
		transform: scale(.2);
	}
}
</style>
