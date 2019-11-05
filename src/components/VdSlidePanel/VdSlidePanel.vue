<template>
    <div class="vd-slide-panel-wrapper" :style="positionStyle">
      <slot name="content"></slot>
      <div class="panel-toggle-button">></div>
    </div>
</template>

<script>
    export default {
        name: "VdSlidePanel",
        props:{
            direction: {
                type: String,
                default: 'left'
            },
            left: {
                type: Number
            },
            top: {
                type: Number
            },
            right: {
                type: Number
            },
            bottom: {
                type: Number
            }
        },
        computed:{
            positionStyle(){
                let style = {};
                // 判断传入的定位值
                if(this.left||this.left === 0){
                    style = Object.assign(style,{left: this.left+'px'})
                }
                if(this.right||this.right === 0){
                    style = Object.assign(style,{right: this.right+'px'})
                }
                if(this.top||this.top === 0){
                    style = Object.assign(style,{top: this.top+'px'})
                }
                if(this.bottom||this.bottom === 0){
                    style = Object.assign(style,{bottom: this.bottom+'px'})
                }
                console.log(style);
                return style
            }
        }
    }
</script>

<style scoped lang="sass">
.vd-slide-panel-wrapper
  position: absolute
  transition: width .33s,height .33s
  .panel-toggle-button
    position: absolute
    width: 24px
    height: 64px
    text-align: center
    line-height: 64px
    background-color: aqua
    cursor: pointer
    &.left
      &-center
        left: -24px
        top: 50%
        margin-top: -32px
      &-top
        left: -24px
        top: 0
        &-top-16
          left: -24px
          top: 16px
      &-bottom
        left: -24px
        bottom: 0
        &-16
          left: -24px
          bottom: 16px
    &.right
      &-center
        right: -24px
        top: 50%
        margin-top: -32px
      &-top
        right: -24px
        top: 0
        &-16
          right: -24px
          top: 16px
      &-bottom
        right: -24px
        bottom: 0
        &-16
          right: -24px
          bottom: 16px
    &.top
      &-center
        top: -44px
        left: 50%
        transform: rotate(90deg)
        margin-left: -12px
      &-left
        top: -44px
        left: 20px
        transform: rotate(90deg)
        &-16
          top: -44px
          left: 36px
          transform: rotate(90deg)
      &-right
        top: -44px
        right: 20px
        transform: rotate(90deg)
        &-16
          top: -44px
          right: 36px
          transform: rotate(90deg)
    &.bottom
      &-center
        bottom: -44px
        left: 50%
        margin-left: -12px
        transform: rotate(-90deg)
      &-left
        bottom: -44px
        left: 20px
        transform: rotate(-90deg)
        &-16
          bottom: -44px
          left: 36px
          transform: rotate(-90deg)
      &-right
        bottom: -44px
        right: 20px
        transform: rotate(-90deg)
        &-16
          bottom: -44px
          right: 36px
          transform: rotate(-90deg)
</style>
