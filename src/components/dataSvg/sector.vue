<template>
  <svg :width="2*radius" :height="2*radius" version="1.1"
       xmlns="http://www.w3.org/2000/svg">
    <path xmlns="http://www.w3.org/2000/svg"
          :transform="`rotate(${rotate},${radius},${radius})`"
          :fill="color"
          :d="`M ${radius} ${radius} L ${endPos.x} ${endPos.y} A ${radius} ${radius} 0 ${this.angle>180?1:0} 0 ${radius} 0 Z`"></path>
  </svg>
</template>

<script>
  export default {
    name: 'sector',
    props: {
      color: {
        type: String,
        default: '#fff'
      },
      radius: {
        type: Number,
        default: 0
      },
      angle: {
        type: Number,
        default: 0
      },
      rotate: {
        type: Number,
        default: 0
      }
    },
    computed: {
      endPos() {
        let x = this.radius + Math.sin(Math.PI * this.angle / 180) * this.radius;
        let y = this.radius - Math.cos(Math.PI * this.angle / 180) * this.radius;
        return {
          x: x,
          y: y
        }
      }
    }
  }
</script>

<style scoped>

</style>
