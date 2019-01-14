<template>
    <chrome-picker v-model="color" />
</template>

<script>
import { Chrome } from "vue-color";
export default {
    data() {
        return {
            colorValue:{hex: "#194d33"},
        }
    },
    components:{
        "chrome-picker": Chrome,
    },
    computed:{
        color:{
            get(){
                return this.colorValue
            },
            set(newVal){
                this.value = newVal
                this.$emit('colorChange', this.value);
            }
        }
    }
}
</script>

<style>

</style>
