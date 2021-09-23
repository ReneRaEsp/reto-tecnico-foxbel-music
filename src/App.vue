<template lang="pug">
.showNavbar(@click="showNavbar()")
	i.fas.fa-chevron-right
NavBar#nav
Main
MusicPlayer
</template>
<script>
//import { ref } from "vue";
import NavBar from "./components/NavBar.vue";
import Main from "./components/Main.vue";
import MusicPlayer from "./components/MusicPlayer.vue";
import "normalize.css";
export default {
  components: {
    NavBar,
    Main,
    MusicPlayer,
  },
  setup() {
    //Variables

    //Methods
    const showNavbar = () => {
      const nav = document.getElementById("nav");
      nav.style.transform = "translateX(0px)";
    };
    return {
      //Variables
      showNavbar

      //Methods
    };
  },
};
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

.showNavbar
	display: flex
	justify-content: center
	align-items: center
	z-index: 4
	position: fixed
	display: none
	background: #EB5757
	opacity: .8
	width: 3rem
	height: 3rem
	border-radius: 100px
	top: 50vh
	left: 2vw
	transform: translateY(-50%)
	cursor: pointer
	i
		font-size: 2rem
		font-weight: bold
		color: white

#nav
	position: relative
	z-index: 5
	transition: 1s

.mostrar
	display: flex


@media screen and (max-width: 768px)
	#app
		width: 100%
		.showNavbar
			display: flex
		#nav
			position: fixed
			transform: translateX(-330px)
</style>
