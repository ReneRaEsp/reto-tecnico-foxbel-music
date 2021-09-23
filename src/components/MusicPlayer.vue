<template lang="pug">
footer.musicPlayer
    img(src="../assets/img/adele21.jpg").cover
    .dataCont
        span.song Canción
        span.artistAlbum Artista - Álbum
    .mainControls
        i.fas.fa-step-backward.controlIcon
        .circle
            i.fas.fa-play.controlIcon
        i.fas.fa-step-forward.controlIcon
    .volumeControls
        .controlBar
            .bar
                .circle
        i.fas.fa-volume-off.volumeIcon

</template>
<script>
export default {
    
}
</script>
<style scoped lang="sass">
.musicPlayer
    display: flex
    flex-direction: row
    justify-content: flex-start
    width: 1300px
    height: 100px
    background: #EB5757
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
            .controlIcon
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
                width: 100px
                height: 6px
                border-radius: 100px
                margin-right: 7px
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

        .volumeIcon
            font-weight: 900
            font-size: 36px
            line-height: 41.4px
            color: #FFFFFF

@media screen and (max-width: 768px)
    .musicPlayer
        display: flex
        justify-content: flex-start
        width: 100%
        .cover
            width: 100px
            height: 100px
</style>