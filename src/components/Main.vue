<template lang="pug">
main.main(v-if="busqueda")
    .busquedaCont
        .barraBusquedaCont
            input.buscarInput(placeholder="Buscar" v-model="buscar")
            i.fas.fa-search.buscarIcon(@keyup.native.enter="searchItem()" @click="searchItem()")
        .userCont
            i.fas.fa-user.userIcon
            p.userText Francisco M.
    .albumCont
        .coverCont
            img(:src="artist.picture_big").imageCover
            i.fas.fa-play.playIcon(@click="pickSong(items[0].id)")
        .descriptionCont
            h2.disco {{ items[0].album.title }}
            .info
                p.categoria {{items[0].artist.name}}
                p.seguidores {{ artist.nb_fan }} seguidores
            p.descripcion Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci praesentium, fugiat laborum ad pariatur cumque, voluptas magni qui esse dicta ex soluta aut. Dicta aliquid consectetur 
            .botonesCont
                .reproducir.boton(@click="see()")  Reproducir
                .seguir.boton Seguir
                p.puntos ...
    .resultadosSeccion
        h2.resultados Resultados
        .resultadosCont
            .card(v-for="item in items" :key="item.id")
                .imageCont
                    img(:src="item.album.cover_medium").imageCover
                    i.fas.fa-play.playIcon(@click="pickSong(item.id)")
                    .ellipse ...
                span.titulo {{ item.title }}
                span.artista {{ item.artist.name }}
main.main(v-else)
    .busquedaCont
        .barraBusquedaCont
            input.buscarInput(placeholder="Buscar" v-model="buscar")
            i.fas.fa-search.buscarIcon(@keyup.native.enter="searchItem()" @click="searchItem()")
        .userCont
            i.fas.fa-user.userIcon
            p.userText Francisco M.
    .albumCont
        .coverCont
            img(:src="artist.picture_big").imageCover
            i.fas.fa-play.playIcon(@click="pickSong(songs[0].id)")
        .descriptionCont
            h2.disco
            .info
                p.categoria {{ artist.name }}
                p.seguidores {{ artist.nb_fan }} seguidores
            p.descripcion Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci praesentium, fugiat laborum ad pariatur cumque, voluptas magni qui esse dicta ex soluta aut. Dicta aliquid consectetur 
            .botonesCont
                .reproducir.boton(@click="see()") Reproducir
                .seguir.boton Seguir
                p.puntos ...
    .resultadosSeccion
        h2.resultados Resultados
        .resultadosCont
            .card(v-for="song in songs" :key="song.id")
                .imageCont
                    img(:src="song.album.cover_medium").imageCover
                    i.fas.fa-play.playIcon(@click="pickSong(song.id)")
                    .ellipse ...
                span.titulo {{ song.title }}
                span.artista {{ song.artist.name }}
            
</template>
<script>
import { useStore } from "vuex";
import { ref, onMounted } from "vue";
import axios from "axios";
export default {
  setup() {
    onMounted(() => {
      getSongs();
      getArtist();
      console.log("mounted");
    });
    //Variables
    const store = useStore();
    const songs = ref([]);
    const artist = ref([]);
    const items = ref([]);
    const busqueda = ref(false);
    const buscar = ref("");
    //Methods
    const getSongs = async () => {
      await axios
        .get(
          "https://compra-ventas-vue-node.herokuapp.com/api/music/songs?id=647650"
        )
        .then((res) => {
          songs.value = res.data.data;
          console.log(songs.value);
        })
        .catch(console.log);
    };
    const getArtist = async (name = "twenty-one-pilots") => {
      await axios
        .get(
          "https://compra-ventas-vue-node.herokuapp.com/api/music/artist?name=" +
            name
        )
        .then((res) => {
          artist.value = res.data;
          console.log(artist.value);
        })
        .catch(console.log);
    };
    const searchItem = async () => {
      let search = buscar.value;
      search = search.toLowerCase().replace(" ", "-");
      await axios
        .get(
          "https://compra-ventas-vue-node.herokuapp.com/api/music/search?search=" +
            search
        )
        .then((res) => {
          items.value = res.data.data;
          console.log("items", items.value);
        })
        .catch(console.log);
      busqueda.value = true;
      let name = items.value[0].artist.name;
      name = name.toLowerCase().replace(" ", "-");
      getArtist(name);
    };
    const pickSong = async (id) => {
      console.log("pick");
      await store.dispatch("selectSong", id);
    };
    const see = () => {
      console.log(items.value[0].artist.name);
    };

    return {
      //Variables
      songs,
      artist,
      busqueda,
      buscar,
      items,
      //Methods
      pickSong,
      searchItem,
      see,
    };
  },
};
</script>
<style lang="sass">
.main
    width: 970px
    min-height: 1087px
    height: 400px
    background: #E5E5E5
    .busquedaCont
        display: flex
        justify-content: space-between
        align-items: center
        background: rgba(30, 180, 90, .0)
        width: 100%
        height: 90px
        .barraBusquedaCont
            display: flex
            align-items: center
            margin-left: 2rem
            width: 524px
            height: 36px
            background: rgba(233, 233, 233, 1)
            border-radius: 100px
            border: 1px solid #828282
            .buscarInput
                width: 524px
                padding: 1rem
                border: 0px
                background: rgba(0,0,0,.01)
                height: 10%
                font-weight: 400
                font-size: 18px
                line-height: 22.5px
                color: black
                &:focus
                    border-radius: 2rem
                    border: 0px solid rgba(255, 255, 255, 0)
            .buscarIcon
                display: flex
                align-items: center
                padding: 2px
                margin-right: 10px
                height: 100%
                background: rgba(0,0,0,.01)
                font-weight: 900
                font-size: 18px
                line-height: 21px
                color: #BDBDBD
                cursor: pointer
        .userCont
            display: flex
            flex-direction: column
            flex-wrap: wrap
            justify-content: center
            align-items: center
            width: 7rem
            margin-right: 2rem
            height: 36px
            .userIcon
                font-weight: 900
                font-size: 14px
                text-align: center
                line-height: 16.1px
                color: #E86060
                margin-right: 10px
            .userText
                color: #4f4f4f
                font-size: 16px
                font-family: Quicksand
                font-weight: 400
                line-height: 20px
    .albumCont
        display: flex
        justify-content: center
        background: rgba(30, 180, 190, 0)
        width: 100%
        height: 250px
        .coverCont
            position: relative
            display: flex
            justify-content: center
            align-items: center
            background: blue
            width: 250px
            height: 250px
            .imageCover
                position: absolute
                width: 100%
                height: 100%
            .playIcon
                z-index: 3
                color: #fff
                font-weight: 900
                font-size: 72px
                line-height: 83px
                cursor: pointer
        .descriptionCont
            width: 642px
            height: 100%
            background: #A70000
            opacity: 0.5
            color: #fff
            padding-left: 1.5rem
            .disco
                text-align: left
                font-weight: bold
                font-size: 22px
            .info
                display: flex
                justify-content: flex-start
                flex-direction: row
                .categoria
                    line-height: 17px
                    font-size: 14px
                .seguidores
                    margin-left: 1rem
                    display: flex
                    align-items: center
                    color: black
                    line-height: 17px
                    font-size: 10px
            .descripcion
                text-align: justify
                font-size: 12px
                line-height: 20px
            .botonesCont
                display: flex
                justify-content: flex-start
                .boton
                    display: flex
                    align-items: center
                    justify-content: center
                    width: 117px
                    height: 31px
                    border-radius: 100px
                .reproducir
                    background: #E86060
                    border: 1px solid #EB5757
                    cursor: pointer
                    &:hover
                        color: #EB5757
                        background: rgba(255, 255, 255, 0)
                        border: 1px solid #EB5757
                .seguir
                    margin-left: 1rem
                    border: 1px solid #EB5757
                    color: #EB5757
                    cursor: pointer
                    &:hover
                        background: #E86060
                        color: white
                .puntos
                    margin-left: 1rem
    .resultadosSeccion
        display: flex
        flex-direction: column
        justify-content: flex-start
        align-items: flex-start
        background: rgba(70, 80, 90, 0)
        width: 95%
        height: 740px
        margin: auto
        .resultados
            margin-top: 4rem
            font-weight: bold
        .resultadosCont
            display: flex
            flex-direction: row
            justify-content: flex-start
            align-items: flex-start
            flex-wrap: wrap
            overflow-y: scroll
            .card
                display: flex
                flex-direction: column
                justify-content: flex-start
                align-items: flex-start
                width: 160px
                height: auto
                margin-top: 1rem
                margin-left: 1.1rem
                .imageCont
                    display: flex
                    justify-content: center
                    align-items: center
                    position: relative
                    .imageCover
                        position: relative
                        width: 160px
                        height: 160px
                    .playIcon
                        font-size: 36px
                        line-height: 42px
                        color: #FFFFFF
                        z-index: 3
                        position: absolute
                        cursor: pointer
                    .ellipse
                        font-family: serif
                        position: absolute
                        transform: rotate(90deg)
                        top: 5%
                        right: 0%
                        font-weight: bold
                        color: white
                        font-size: 1.3rem
                .titulo
                    margin-top: 12px
                    font-weight: bold
                    font-size: 14px
                    line-height: 17px
                    color: #555555
                .artista
                    font-weight: normal
                    font-size: 12px
                    line-height: 15px
                    color: #828282




@media screen and (max-width: 768px)
    .main
        width: 100%
        .busquedaCont
            .barraBusquedaCont
                width: 50%
                .buscarInput
                    width: 100%
        .albumCont
            .coverCont
                width: 35vw
                height: 35vw
            .descriptionCont
                width: 65vw
                height: 35vw
        .resultadosCont
</style>
