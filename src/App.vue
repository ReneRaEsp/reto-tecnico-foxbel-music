<template lang="pug">
NavBar
Main
MusicPlayer
</template>
<script>
import NavBar from "./components/NavBar.vue";
import Main from "./components/Main.vue";
import MusicPlayer from "./components/MusicPlayer.vue";
import 'normalize.css';
export default{
	components:{
		NavBar, Main, MusicPlayer
	},
	setup(){
		return{

		}
	}
}
</script>

<style lang="sass">
body
	overflow-x: auto
	font-family: Quicksand

#app
	margin: auto
	display: flex
	flex-wrap: wrap
	width: 1300px
	font-family: Avenir, Helvetica, Arial, sans-serif
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	text-align: center
	color: #2c3e50
	background: #ffffff
	overflow: hidden

#nav
	padding: 30px

a
	font-weight: bold
	color: #2c3e50

@media screen and (max-width: 768px)
	#app
		width: 100%
</style>
