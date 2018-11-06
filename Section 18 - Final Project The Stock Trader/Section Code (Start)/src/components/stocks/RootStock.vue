<template>
    <div>
        <transition mode="out-in" appear name="slide" type="animation">
            <component :index="index" :purchaseOrderAmount="purchaseOrderAmount" :purchaseFunction="confirmPurchaseElement" :key="index.id" :is="currentComponent" ></component>
        </transition>
    </div>
    
</template>

<script>
import Stock from './Stock.vue'
import ConfirmPurchase from './ConfirmPurchase.vue'

import { mapGetters, mapActions } from 'vuex'


export default {
    data(){
        return {
            currentComponent: 'appStock',
            purchaseOrderAmount:''
        }
    },
    props:{
        index: {
            type: Object
        }
    },
    computed:{
        ...mapGetters([
            'getStocks'
        ])
    },
    methods:{
        confirmPurchaseElement(index){

            this.currentComponent = 'appPurchase'
            console.log(index)
        },
        ...mapActions([
            
        ])
    },
    components:{
            appStock:Stock,
            appPurchase:ConfirmPurchase
        },
}
</script>

<style>

.stock-block{
    display: inline-block
}

</style>
