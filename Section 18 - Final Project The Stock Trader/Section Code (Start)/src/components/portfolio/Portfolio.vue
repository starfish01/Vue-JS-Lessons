<template>
    <div class="panel panel-default">
        <div class="panel-body">
        Portfolio
        
        <!-- {{ getStockBought }} -->
        <ul class="list-group">
            <app-stock v-for="stock in getStockBought" :stock="stock" :key="stock.time" ></app-stock>
        </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Stock from './orderItem.vue'

export default {
    computed:{
        ...mapGetters([
            'getStockBought'
        ])
    },
    components:{
        appStock:Stock
    }

}
</script>

<style>

</style>
