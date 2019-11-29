<template>
  <div class="vd-scroll-number-list">
    <VdSingleNumber v-for="(placeValue,index) in length"
                    :key="index"
                    :value="numberArr[index]"></VdSingleNumber>
  </div>
</template>

<script>
    import VdSingleNumber from "./VdSingleNumber";

    export default {
        name: "VdScrollNumber",
        components: {
            VdSingleNumber
        },
        props: {
            value: {
                type: Number,
                default: 0
            },
            defaultLength: {
                type: Number,
                default: 0
            }
        },
        computed: {
            length(){
                let valueLength = this.value.toString().split('').length;
                return valueLength>this.defaultLength?valueLength:this.defaultLength
            },
            numberArr() {
                let length = this.length;
                let arr = Array(length).fill(0);
                let valueArr = this.value.toString().split('');
                let gap = length - valueArr.length;
                if(gap>=0){
                    valueArr.forEach((item, index) => {
                        arr[gap + index] = parseInt(item)
                    });
                } else {
                    arr = Array(length).fill(9);
                }
                return arr;
            }
        }
    }
</script>

<style scoped lang="sass">
  .vd-scroll-number-list
    overflow: hidden
    display: flex
    flex-direction: row
</style>
