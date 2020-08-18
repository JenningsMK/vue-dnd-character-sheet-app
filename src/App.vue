<template>
	<router-view />
</template>

<style lang="scss">
@import '~normalize.css';

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

#app {
	font-family: 'Raleway', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
