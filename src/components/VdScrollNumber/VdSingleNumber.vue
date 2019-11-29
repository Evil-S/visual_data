<template>
  <div class="number-item">
    <div class="numbers" :style="{top:top+'px'}">0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9</div>
  </div>
</template>

<script>
    export default {
        name: "VdSingleNumber",
        props:{
            value: {
                type: Number,
                default: 0
            }
        },
        data(){
          return {
              number:0
          }
        },
        computed:{
            top(){
                return -this.number*64
            }
        },
        watch:{
            value(){
                setTimeout(()=>{
                    this.number = this.value
                },100)
            }
        },
        mounted() {
            setTimeout(()=>{
                this.number = this.value
            },100)
        }
    }
</script>

<style scoped lang="sass">
  .number-item
    flex: none
    width: 36px
    height: 64px
    overflow: hidden
    text-align: center
    line-height: 64px
    font-size: 48px
    position: relative
    .numbers
      width: 36px
      line-height: inherit
      position: absolute
      top: 0
      left: 0
      transition: top 0.3s
</style>
