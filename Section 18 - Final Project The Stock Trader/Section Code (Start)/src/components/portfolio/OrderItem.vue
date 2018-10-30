<template>
    <li class="list-group-item" :class=" isProfit ? 'profit' : 'loss'">
            <b>Name:</b> {{getStocks[stock.id-1].name}}
            <b>Date:</b> {{stock.time}} 
            <b>Purchase Price:</b> {{stock.purchasePrice}} 
            <b>Purchase Order:</b> {{stock.purchaseOrder}}
            <b>Cost:</b> ${{stock.purchasePrice * stock.purchaseOrder}}
            <b>Position:</b> ${{stockPosition(stock.purchasePrice, stock.purchaseOrder, getStocks[stock.id-1].currentPrice)}}
            <button class="btn btn-primary" @click="sellOrdera(stock)">Sell</button>
    </li>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'



export default {
    data(){
        return{
           currentWorth: 0 
        }
    },
    props:{
        stock: {
          type: Object
        }
    },
    computed:{
        ...mapGetters([
            'getStocks'
        ]),
        isProfit(){
            if(this.currentWorth >= 0 ){
                return true;
            }else{
                return false;
            }
        },
    },
    methods:{
        ...mapActions([
            'sellOrdera'
        ]),
        stockPosition(p, o, c){
            var purchaseWorth = p*o
            this.currentWorth = c*o - purchaseWorth
            return this.currentWorth
        },
    }
}
</script>

<style>

.profit{
    background-color: aqua
}
.loss{
    background-color: lightcoral
}

</style>
