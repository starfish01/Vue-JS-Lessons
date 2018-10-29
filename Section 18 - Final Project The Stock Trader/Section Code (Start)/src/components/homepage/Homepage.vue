<template>
    <div class="panel panel-default">
        <div class="panel-body">
        <h3>Trade or View your Portfolio</h3>
        <p>You may Save & Load your Data</p>
        <p>Click on 'End Day' to begin a new Day!</p>
        <hr>
        <h4>Your Funds: ${{ walletValue }}</h4>
        <hr>
        <button @click="purchaseOrder(10)">BUY</button>
        <button @click="sellOrder(10)">Sell</button>
        <hr>
        {{ getStocks[1].name }}
        <hr>
        <button @click="nextDayPriceChange">Day</button>

        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    computed:{
        ...mapGetters([
            'walletValue',
            'getStocks'
        ])
    },
    methods:{
        ...mapActions([
            'purchaseOrder',
            'sellOrder',
            'nextDayPriceChange'
        ])
    },
   
}
</script>

<style>

</style>
