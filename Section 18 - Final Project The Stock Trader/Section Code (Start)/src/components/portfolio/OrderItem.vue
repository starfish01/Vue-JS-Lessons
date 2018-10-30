<template>
    <li class="list-group-item">
        Name: {{getStocks[stock.id-1].name}}
        Date: {{stock.time}} 
        Purchase Price: {{stock.purchasePrice}} 
        Purchase Order: {{stock.purchaseOrder}}
        Cost: ${{stock.purchasePrice * stock.purchaseOrder}}
        Position:${{stockPosition(stock.purchasePrice, stock.purchaseOrder, getStocks[stock.id-1].currentPrice)}}
        <button class="btn btn-primary">Sell</button>
    </li>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'



export default {
    props:{
        stock: {
          type: Object
        }
    },
     computed:{
        ...mapGetters([
            'getStocks'
        ]),
    },
    methods:{
        stockPosition(p, o, c){
            var purchaseWorth = p*o
            var currentWorth = c*o - purchaseWorth

            return currentWorth
        }
    }
}
</script>

<style>

</style>
