<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Confirm Purchase - ${{purchaseOrderAmount*index.currentPrice}}</h3>
        </div>
        <div class="panel-body">
            <p><b>Current Stock Price: ${{index.currentPrice}}</b> </p>   
            <form >
                <div class="form-group">
                    <label for="order">Order: {{purchaseOrderAmount}} stocks</label>
                    <button  class="btn btn-primary" v-if="isItADeal" @click.prevent="purchaseOrderFunction(index)">Buy</button>
                    <button  class="btn btn-danger" @click.prevent="cancelFunction">Cancel</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    props:{
        purchaseOrderAmount: String,
        purchaseOrderFunction: Function,
        cancelFunction:Function,
            index: {
                type: Object
            }
        },
        computed:{
            isItADeal(){
                var payablePrice = this.purchaseOrderAmount * this.purchaseOrderAmount
                var wal = this.walletValue

                if(payablePrice > wal){
                    return false;
                }else{
                    return true;
                }
                
            },
            ...mapGetters([
            'walletValue'
        ]),
        },

        methods:{  
      
        ...mapActions([
            'newPurchaseOrder',
            'buyStockUpdateWallet'
        ]),
       
    },
    

}
</script>

<style scoped>
.inputPrice{
  width: 50%;
  display: inline-block;
}
label{
    display:block
}
.panel-body{
    background-color: aqua;
}

</style>
