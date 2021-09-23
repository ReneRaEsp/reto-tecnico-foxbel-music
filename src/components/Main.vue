<template lang="pug">
main.main
    .busquedaCont
        .barraBusquedaCont
            input.buscarInput(placeholder="Buscar")
            i.fas.fa-search.buscarIcon
        .userCont
            i.fas.fa-user.userIcon
            p.userText Francisco M.
    .albumCont
        .coverCont
            img(src="../assets/img/adele21.jpg").imageCover
            i.fas.fa-play.playIcon
        .descriptionCont
            h2.disco Adele 21
            .info
                p.categoria Lo mejor de Adele 
                p.seguidores 321.123 seguidores
            p.descripcion Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica.
            .botonesCont
                .reproducir.boton Reproducir
                .seguir.boton Seguir
                p.puntos ...
    .resultadosSeccion
        h2.resultados Resultados
        .resultadosCont
            .card
                .imageCont
                    img(src="../assets/img/adele21.jpg").imageCover
                    i.fas.fa-play.playIcon
                    .ellipse ...
                span.titulo 21
                span.artista Adele
            .card
                .imageCont
                    img(src="../assets/img/adele21.jpg").imageCover
                    i.fas.fa-play.playIcon
                    .ellipse ...
                span.titulo 21
                span.artista Adele
            .card
                .imageCont
                    img(src="../assets/img/adele21.jpg").imageCover
                    i.fas.fa-play.playIcon
                    .ellipse ...
                span.titulo 21
                span.artista Adele
            .card
                .imageCont
                    img(src="../assets/img/adele21.jpg").imageCover
                    i.fas.fa-play.playIcon
                    .ellipse ...
                span.titulo 21
                span.artista Adele
            .card
                .imageCont
                    img(src="../assets/img/adele21.jpg").imageCover
                    i.fas.fa-play.playIcon
                    .ellipse ...
                span.titulo 21
                span.artista Adele
            .card
                .imageCont
                    img(src="../assets/img/adele21.jpg").imageCover
                    i.fas.fa-play.playIcon
                    .ellipse ...
                span.titulo 21
                span.artista Adele
            .card
                .imageCont
                    img(src="../assets/img/adele21.jpg").imageCover
                    i.fas.fa-play.playIcon
                    .ellipse ...
                span.titulo 21
                span.artista Adele
            .card
                .imageCont
                    img(src="../assets/img/adele21.jpg").imageCover
                    i.fas.fa-play.playIcon
                    .ellipse ...
                span.titulo 21
                span.artista Adele
            .card
                .imageCont
                    img(src="../assets/img/adele21.jpg").imageCover
                    i.fas.fa-play.playIcon
                    .ellipse ...
                span.titulo 21
                span.artista Adele
            .card
                .imageCont
                    img(src="../assets/img/adele21.jpg").imageCover
                    i.fas.fa-play.playIcon
                    .ellipse ...
                span.titulo 21
                span.artista Adele
        

</template>
<script>
export default {
    
}
</script>
<style lang="sass">
.main
    width: 970px
    min-height: 1087px
    height: auto
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
                color: #BDBDBD
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
                .seguir
                    margin-left: 1rem
                    border: 1px solid #EB5757
                    color: #EB5757
                .puntos
                    margin-left: 1rem
    .resultadosSeccion
        display: flex
        flex-direction: column
        justify-content: flex-start
        align-items: flex-start
        background: rgba(70, 80, 90, 0)
        width: 100%
        height: max-content
        padding-left: 2rem
        padding-right: 2rem
        .resultados
            margin-top: 4rem
            font-weight: bold
        .resultadosCont
            display: flex
            flex-direction: row
            justify-content: flex-start
            align-items: flex-start
            flex-wrap: wrap
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