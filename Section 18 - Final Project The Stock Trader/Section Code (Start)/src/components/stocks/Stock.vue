<template>
<div>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">{{index.name}}</h3>
        </div>
        <div class="panel-body">
            <p><b>Current Stock Price:</b> ${{index.currentPrice}}</p>   
            <form >
                <div class="form-group">
                    <label for="order">Order: ${{purchaseOrderAmountInput * index.currentPrice}}</label>
                    <input v-model="purchaseOrderAmountInput" id="order" type="number" class="form-control inputPrice">
                    <button :disabled=!purchaseOrderCorrectStock class="btn btn-primary" @click.prevent="purchaseOrder(index)">Buy</button>
                </div>
            </form>
        </div>
    </div>
</div>
    
</template>

<script>

    import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return{
            purchaseOrderAmountInput:''
        }
    },
    props:{
        index: {
          type: Object
        }
    },
    methods:{
        purchaseOrder(order){
            if(!this.checkIfThereIsRemainingFunds(this.purchaseOrderAmountInput,order.currentPrice)){
                alert("Insuficent Funds")
                return
            }
            var newOrder = {
                 id:order.id, 
                 time: Date.now(), 
                 purchasePrice: order.currentPrice, 
                 purchaseOrder: this.purchaseOrderAmountInput 
            }
            this.$store.dispatch('newPurchaseOrder',newOrder);
            this.purchaseOrderAmountInput = ''
            alert('Purchase Made')

        },
        checkOrderIsValid(order){
            
        },
        ...mapActions([
            'newPurchaseOrder',
            'buyStockUpdateWallet'
        ]),
        checkIfThereIsRemainingFunds(amount, price){
            var orderAmount = amount * price
            if(orderAmount > this.walletValue){
                    this.purchaseOrderAmountInput = ''
                return false
            }else{
                this.$store.dispatch('buyStockUpdateWallet',orderAmount)
                return true
            }
        }

    },
    computed:{
        purchaseOrderCorrectStock(){
            if(this.purchaseOrderAmountInput >= 1){
                return true
            }else{
                return false
            } 
        },
        ...mapGetters([
            'walletValue'
        ]),
    }
}
</script>

<style>
.inputPrice{
  width: 50%;
  display: inline-block;
}
label{
    display:block
}

</style>
