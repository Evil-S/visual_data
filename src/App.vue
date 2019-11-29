<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <vd-slide-panel
      :left="panelLeft"
      :top="panelTop"
      direction="horizontal"
      width="280px"
      height="880px"
      button-position="right-top"
      :default-status="false"
    >
      <div class="panel-content" slot="content"></div>
      <div class="toggle-button" slot="toggleButton">></div>
    </vd-slide-panel>
    <input class="handleNumber" type="text" v-model.number="scrollNumber"/>
    <VdScrollNumber :value="scrollNumber" :defaultLength="5"/>
  </div>
</template>

<script>
    import VdSlidePanel from './components/VdSlidePanel/VdSlidePanel'
    import VdScrollNumber from './components/VdScrollNumber/VdScrollNumber'
    export default {
        name: 'app',
        components:{
            VdSlidePanel,
            VdScrollNumber
        },
        data() {
            return {
                msg: 'Welcome to Visual Data UI Demo!',
                panelLeft: 16,
                panelTop: 16,
                scrollNumber: 0
            }
        },
        mounted() {

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
  .handleNumber
    width: 280px
    height: 40px
    line-height: 36px
</style>
