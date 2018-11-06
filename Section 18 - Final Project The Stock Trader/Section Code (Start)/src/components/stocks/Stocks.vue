<template>
    <div class="panel panel-default">
        <div class="panel-body">
        <h4>Stocks</h4>
            <div class="row">

            
                <transition-group mode="out-in" appear name="slide" type="animation">
                    <div v-for="index in getStocks" :key="index.id" class="col-sm-6 stock-block col-xs-12">
                        <component :index="index" :key="index.id" :is="currentComponent" ></component>
                    </div>
                </transition-group>


            
            
            </div>
        </div>
    </div>
</template>

<script>
import Stock from './Stock.vue'
import ConfirmPurchase from './ConfirmPurchase.vue'
import RootStock from './RootStock.vue'

import { mapGetters, mapActions } from 'vuex'


export default {
    data(){
        return{
             currentComponent: 'appRootStock',

        }
    },
    computed:{
        ...mapGetters([
            'getStocks'
        ])
    },
    methods:{
        ...mapActions([
            
        ])
    },
    components:{
            appStock:Stock,
            appPurchase:ConfirmPurchase,
            appRootStock:RootStock
        },
}
</script>

<style>

.stock-block{
    display: inline-block
}

</style>
