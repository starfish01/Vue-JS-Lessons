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
                        <button :disabled=!purchaseOrderCorrectStock class="btn btn-primary" @click.prevent="purchaseFunction(index,purchaseOrderAmountInput)">Buy</button>
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
        return {
            purchaseOrderAmountInput: ''
        }
    },
    props:{
        purchaseOrderAmount: String,
        index: {
          type: Object
        },
        purchaseFunction: Function
    },
    methods:{  

    },
    computed:{
        purchaseOrderCorrectStock(){
            if(this.purchaseOrderAmountInput >= 1){
                return true
            }else{
                return false
            } 
        },

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
