<template>
	<div>
		<router-view />
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '~normalize.css';

@import 'assets/styles/light.module.css' (prefers-color-scheme: light);
@import 'assets/styles/dark.module.css' (prefers-color-scheme: dark);

@font-face {
	font-family: 'Raleway';
	src: local('Raleway'), url('./assets/fonts/Raleway.ttf');
	font-variation-settings: 'wdth' 400, 'wght' 98;
	font-display: swap;
}

@font-face {
	font-family: 'Montserrat';
	src: local('Montserrat'), url('./assets/fonts/Montserrat-Regular.ttf');
	font-weight: 400;
	font-display: swap;
}

@font-face {
	font-family: 'Montserrat';
	src: local('Montserrat'), url('./assets/fonts/Montserrat-SemiBold.ttf');
	font-weight: 500;
	font-display: swap;
}

@font-face {
	font-family: 'Montserrat';
	src: local('Montserrat'), url('./assets/fonts/Montserrat-Bold.ttf');
	font-weight: 600;
	font-display: swap;
}

body {
	font-family: 'Raleway', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: rgb(var(--font-body-colour));
	background: rgb(var(--background-colour));
	padding: 1rem;
}

h1,
h2,
h3 {
	font-family: 'Montserrat', sans-serif;
	font-weight: normal;
}

.u-visually-hidden {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
</style>
