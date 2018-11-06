<template>
    <div>
        <transition mode="out-in" appear name="flip" type="animation">
            <component :index="index" :cancelFunction="cancelPurchase" :purchaseOrderAmount="purchaseOrderAmount" :purchaseOrderFunction="purchaseOrder" :purchaseFunction="confirmPurchaseElement" :key="index.id" :is="currentComponent" ></component>
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
        confirmPurchaseElement(index, order){
            this.currentComponent = 'appPurchase'
            this.purchaseOrderAmount = order
        },
        ...mapActions([
            'newPurchaseOrder',
            'buyStockUpdateWallet'
        ]),
        purchaseOrder(order){
            var newOrder = {
                 id:order.id, 
                 time: Date.now(), 
                 purchasePrice: order.currentPrice, 
                 purchaseOrder: this.purchaseOrderAmount 
            }
            this.$store.dispatch('newPurchaseOrder',newOrder);
            this.$store.dispatch('buyStockUpdateWallet',newOrder)
            this.purchaseOrderAmount = ''
            this.currentComponent = 'appStock'
        },
        cancelPurchase(){
            this.purchaseOrderAmount = ''
            this.currentComponent = 'appStock'
        }
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
.flip-enter{
	opacity: 0;
}
.flip-enter-active{
	animation:flip-in 0.5s ease-out forwards;
	transition: opacity 0.5s;
}
.flip-leave{}
.flip-leave-active{
	animation:flip-out 0.5s ease-out forwards;
	transition: opacity 0.5s;
	opacity: 0;
}
@keyframes flip-in {
	from {
		transform:rotateY(180deg);
	}
	to {
		transform: rotateY(0)
	} 
}
@keyframes flip-out {
	from {
		transform:rotateY(0);
	}
	to {
		transform: rotateY(180deg)
	} 
}

</style>
