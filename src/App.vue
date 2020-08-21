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

@import 'assets/styles/light.css' (prefers-color-scheme: light);
@import 'assets/styles/dark.css' (prefers-color-scheme: dark);

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
	text-align: center;
	color: var(--font-body-colour);
	background: var(--background-colour);
}

h1,
h2,
h3 {
	font-family: 'Montserrat', sans-serif;
	font-weight: normal;
}
</style>
