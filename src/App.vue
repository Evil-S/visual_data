<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <vd-slide-panel :left="panelLeft" :top="panelTop" direction="horizontal" width="280px" height="880px" button-position="right-top">
      <div class="panel-content" slot="content"></div>
      <div class="toggle-button" slot="toggleButton">></div>
    </vd-slide-panel>
  </div>
</template>

<script>
    import VdSlidePanel from './components/VdSlidePanel/VdSlidePanel'
    export default {
        name: 'app',
        components:{
            VdSlidePanel
        },
        data() {
            return {
                msg: 'Welcome to Visual Data UI Demo!',
                panelLeft: 16,
                panelTop: 16,
            }
        }
    }
</script>

<style lang="sass">
  .panel-content
    width: 280px
    height: 880px
    background-color: antiquewhite
  .toggle-button
    position: absolute
    width: 24px
    height: 64px
    text-align: center
    line-height: 64px
    background-color: aqua
    cursor: pointer
</style>
