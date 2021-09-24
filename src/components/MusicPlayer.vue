<template lang="pug">
footer.musicPlayer
    img(:src="track.album.cover_medium").cover
    .dataCont
        span.song {{ track.title }}
        span.artistAlbum {{ track.artist.name }} - {{ track.album.title }}
    .mainControls
        i.fas.fa-step-backward.controlIcon
        .circle
            i.controlIcon(@click="playSong()" class="fa" :class="{ 'fa-play': playIcon, 'fa-pause' : !playIcon}")
        i.fas.fa-step-forward.controlIcon
    .volumeControls
        .controlBar
            input.bar(@change="selectVolume()" v-model="volumeCh" type="range" min="0" max="1" step="0.01")
        i(@click="toggleMute()" class="fas volumeIcon" 
        :class=" { 'fa-volume-up':!isMuted || volumeCh < 0, 'fa-volume-mute': isMuted || volumeCh == 0 }")

</template>
<script>
import { useStore } from 'vuex';
import { ref, onMounted, watchEffect } from 'vue';
export default {
    
    setup(){
        const store = useStore();
        onMounted(()=>{
            selectSong();
        });
        
        //Variables        
        let song = ref('99976952');
        let track = ref({
            title: 'cargando',
            artist: {
                name: 'cargando'
            },
            album:{
                name: 'cargando'
            },
            preview: 'cargando'
        });
        let playing = ref(false);
        let audio = ref(new Audio());
        let volumeCh = ref(1);
        let playIcon = ref(true);
        let isMuted = ref(false);
        watchEffect(() => {let data = store.state.selectedSong;
        track.value = data });
        //Methods
        const selectSong = async () => {
            const songToSend = song.value;
            await store.dispatch("selectSong", songToSend);
        };
        const playSong = ()=>{
            if(!playing.value){
                audio.value = new Audio(track.value.preview);
                audio.value.loop = true;
                audio.value.play();
                playIcon.value = false;
                playing.value = true;
            } else {
                audio.value.pause();
                playIcon.value = true;
                playing.value = false;
            }       
        };
        const selectVolume = ()=>{
            audio.value.volume = volumeCh.value;  
        };
        const toggleMute = ()=>{
            if(isMuted.value){
                audio.value.volume = volumeCh.value;
                isMuted.value = false;
            } else {
                audio.value.volume = 0;
                isMuted.value = true;
            };
        };
        return{
            //Variables
            track, playIcon, volumeCh, isMuted,

            //Methods
            playSong, selectVolume, toggleMute
        }
    }
};
</script>
<style scoped lang="sass">
.musicPlayer
    display: flex
    flex-direction: row
    justify-content: flex-start
    flex-wrap: wrap
    width: 1300px
    height: 100px
    background: #EB5757
    z-index: 2
    .cover
        width: 100px
        height: 100px
    .dataCont
        display: flex
        justify-content: center
        flex-direction: column
        align-items: flex-start
        padding-left: 1rem
        color: #ffffff
        .song
            padding: 1px
            font-weight: 700
            font-size: 14px
            line-height: 17.5px
            margin-bottom: 4px
        .artistAlbum
            text-align: left
            margin-top: 4px
            padding: 1px
            font-weight: 400
            font-size: 12px
            line-height: 15px
    .mainControls
        display: flex
        justify-content: center
        align-items: center
        width: 70%
        height: 100%
        .controlIcon
            font-weight: 900
            font-size: 18px
            line-height: 20.7px
            color: white
            cursor: pointer
        .circle
            display: flex
            justify-content: center
            align-items: center
            background: #FF7676
            width: 2.5rem
            height: 2.5rem
            border-radius: 100%
            margin-right: .5rem
            margin-left: .5rem
            cursor: pointer
            .controlIcon
                cursor: pointer
    .volumeControls
        width: 10%
        display: flex
        justify-content: flex-end
        align-items: center
        padding-right: 1rem
        .controlBar
            .bar
                position: relative
                background: white
                color: white
                width: 100px
                height: 16px
                border-radius: 100px
                margin-right: 7px
                cursor: pointer
                .circle
                    top: 50%
                    left: 50%
                    transform: translate(-50%, -50%)
                    position: absolute
                    background: white
                    width: 20px
                    height: 20px
                    border-radius: 100px
                    z-index: 3
                    cursor: pointer

        .volumeIcon
            font-weight: 900
            font-size: 36px
            line-height: 41.4px
            color: #FFFFFF
            cursor: pointer

@media screen and (max-width: 768px)
    .musicPlayer
        display: flex
        justify-content: space-evenly
        flex-wrap: wrap-reverse
        width: 100vw
        height: 70vw
        padding-bottom: 1rem
        .cover
            width: 40vw
            height: 40vw
        .dataCont
            width: 49vw
            height: 25%
        .mainControls
            width: 30vw
            height: 20vw
        .volumeControls
            width: 30vw
            height: 20vw
</style>
