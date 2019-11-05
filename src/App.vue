<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <vd-slide-panel :left="panelLeft" :top="panelTop">
      <div class="panel-content" slot="content"></div>
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

<style lang="scss">
  .panel-content{
    width: 280px;
    height: 880px;
    background-color: antiquewhite;
  }
</style>
