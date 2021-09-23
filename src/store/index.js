import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    selectedSong: {
        title: 'cargando',
        artist: {
            name: 'cargando'
        },
        album:{
            name: 'cargando',
            cover_medium: 'cargando'
        },
        preview: 'cargando'
    }
  },
  mutations: {
    selectSong(state, payload) {
      state.selectedSong = payload;
    },
    pickSong(state, playload) {
      state.sonToPick = playload;
    },
  },
  actions: {
    async selectSong(ctx, song) {
      await axios
        .get(`https://compra-ventas-vue-node.herokuapp.com/api/music/track?id=${song}`)
        .then((res) => {
          console.log(res.data);
          ctx.commit("selectSong", res.data);
        })
        .catch(console.log);
    }
  },
  modules: {},
});
