<template>

    
    <div class="panel panel-default" >
        <div class="panel-heading" :class=" isProfit ? 'profit' : 'loss'">
            <h3 class="panel-title">{{getStocks[stock.id-1].name}}</h3>
        </div>
        <div class="panel-body">
            <b>Name:</b> {{getStocks[stock.id-1].name}}<br>
            <b>Date:</b> {{timeAndDate(stock.time)}}<br>
            <b>Purchase Price:</b> {{stock.purchasePrice}}<br> 
            <b>Purchase Order:</b> {{stock.purchaseOrder}}<br>
            <b>Cost:</b> ${{stock.purchasePrice * stock.purchaseOrder}}<br>
            <b>Position:</b> ${{stockPosition(stock.purchasePrice, stock.purchaseOrder, getStocks[stock.id-1].currentPrice)}}<br>
            <button class="btn btn-primary" @click="sellOrdera(stock)">Sell</button>
    
        </div>
    </div>

    


</template>

<script>
import { mapGetters, mapActions } from 'vuex'
var moment = require('moment');


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
        timeAndDate(time){
            return moment(time).format('lll')          
            // moment(time).format(lll);

        }
    }
}
</script>

<style >
button.btn.btn-primary{
    margin: 10px
}

.profit {
    background-color: aqua !important
}
.loss {
    background-color: lightcoral !important
}

</style>
