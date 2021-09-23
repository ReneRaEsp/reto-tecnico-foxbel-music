<template lang="pug">
aside.navBar
    .hideNavbar(@click="hideNavbar()")
        i.fas.fa-chevron-left
    .logoCont
        img.logo(src="../assets/img/foxbel-music.png" alt="logo-foxbel-music")
    .libreriaCont
        h2.titulo Mi Librería
        ul
            li Recientes
            li Artistas
            li Albums
            li Canciones
            li Estaciones
        h2.titulo Playlist
        ul
            li Metal 
            li Para bailar
            li Rock 90s
            li Baladas
    .playlist
</template>
<script>
export default {
    setup(){
        //Variables
        //Methods
        const hideNavbar = ()=>{
            let nav = document.getElementById('nav');
            nav.style.transform = "translateX(-330px)"
        }
        return{
            hideNavbar
        }
    }    
}
</script>
<style scoped lang="sass">
.navBar
    position: relative
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: flex-start
    width: 330px
    height: 1087px
    background: #662323
    box-shadow: 0px 4px 4px rgba(0, 0, 0, .25)
    .hideNavbar
        display: none
        justify-content: center
        align-items: center
        width: 3rem
        height: 3rem
        position: absolute
        background: #EB5757
        opacity: .8
        border-radius: 100px
        top: 50vh
        right: 2%
        transform: translateY(-50%)
        cursor: pointer
        i
            font-size: 2rem
            font-weight: bold
            color: white
    .logoCont
        display: flex
        justify-content: center
        align-items: center
        margin-top: 50px
        width: 100%
        height: 59px
        .logo
            width: 250px
            height: 59px
    .libreriaCont
        display: flex
        flex-direction: column
        justify-content: flex-start
        align-items: flex-start
        width: 100%
        margin: 0
        .titulo
            font-size: 22px
            font-weight: bold
            line-height: 27px
            margin: 0
            margin-top: 2rem
            margin-bottom: 5px
            padding-left: 2rem
            color: #FFFFFF
        ul
            margin: 0
            width: 100%
            display: flex
            flex-direction: column
            justify-content: flex-start
            align-items: flex-start
            padding: 0
            li  
                font-weight: normal
                font-size: 16px
                line-height: 20px
                padding-left: 2rem
                margin-bottom: 7px
                text-align: left
                width: 70%
                display: block
                list-style: none
                color: #FFFFFF
                border-left: 2px solid rgba(255, 255, 255, 0)
                cursor: pointer
                transition: .2s
                &:hover
                    color: #E86060
                    border-left: 2px solid #E86060


@media screen and (max-width: 768px)
    .navBar
        .hideNavbar
            display: flex

</style>