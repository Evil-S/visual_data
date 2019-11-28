<template>
  <div class="vd-slide-panel-wrapper" :style="[positionStyle,statusStyle]">
    <div class="slide-content" :style="statusStyle">
      <slot name="content"></slot>
    </div>
    <div class="panel-toggle-button" :class="buttonPosition" @click="handleTogglePanel">
      <slot name="toggleButton"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "VdSlidePanel",
        data() {
            return {
                open: this.defaultStatus
            }
        },
        props: {
            width: {
                type: Number | String,
                default: 'auto'
            },
            height: {
                type: Number | String,
                default: 'auto'
            },
            defaultStatus: {
                type: Boolean,
                default: true
            },
            buttonPosition: {
                type: String,
            },
            direction: {
                type: String,
                default: 'toLeft'
            },
            left: {
                type: Number | String
            },
            top: {
                type: Number | String
            },
            right: {
                type: Number | String
            },
            bottom: {
                type: Number | String
            }
        },
        computed: {
            positionStyle() {
                let style = {};
                // 判断传入的定位值
                if (this.left || this.left === 0) {
                    if (typeof this.left === "number") {
                        style = Object.assign(style, {left: this.left + 'px'})
                    } else {
                        style = Object.assign(style, {left: this.left})
                    }
                }
                if (this.right || this.right === 0) {
                    if (typeof this.right === "number") {
                        style = Object.assign(style, {right: this.right + 'px'})
                    } else {
                        style = Object.assign(style, {right: this.right})
                    }
                }
                if (this.top || this.top === 0) {
                    if (typeof this.top === "number") {
                        style = Object.assign(style, {top: this.top + 'px'})
                    } else {
                        style = Object.assign(style, {top: this.top})
                    }
                }
                if (this.bottom || this.bottom === 0) {
                    if (typeof this.bottom === "number") {
                        style = Object.assign(style, {bottom: this.bottom + 'px'})
                    } else {
                        style = Object.assign(style, {bottom: this.bottom})
                    }
                }
                console.log(style);
                return style
            },
            statusStyle() {
                if (this.direction === "vertical") {
                    return {
                        height: this.open ? this.height : 0
                    }
                } else {
                    if (this.direction !== "horizontal") {
                        console.log('the value of direction not correct!')
                    }
                    return {
                        width: this.open ? this.width : 0
                    };
                }
            }
        },
        methods: {
            handleTogglePanel() {
                this.open = !this.open
            }
        }
    }
</script>

<style scoped lang="sass">
  .vd-slide-panel-wrapper
    position: absolute
    transition: width .33s, height .33s

    .slide-content
      transition: width .33s, height .33s
      overflow: hidden

    .panel-toggle-button
      position: absolute
      text-align: center
      line-height: 64px
      background-color: aqua
      cursor: pointer
      &.left
        &-center
          left: 0
          top: 50%

        &-top
          left: 0
          top: 0

        &-bottom
          left: 0
          bottom: 0

      &.right
        &-center
          right: 0
          top: 50%

        &-top
          right: 0
          top: 0

        &-bottom
          right: 0
          bottom: 0

      &.top-center
        top: 0
        left: 50%

      &.bottom-center
        bottom: 0
        left: 50%
</style>
