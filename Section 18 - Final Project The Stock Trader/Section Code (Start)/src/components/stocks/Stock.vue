<template>
<div>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">{{index.name}}</h3>
        </div>
        <div class="panel-body">
            <p>Current Stock Price ${{index.currentPrice}}</p>
<!--    
   UP TO HERE
   need to make it a form so i can apply form validation  -->
   
            <form >
                <div class="form-group">
                    <label for="order">Order:</label>
                    <input v-model="purchaseOrderAmountInput" id="order" type="number" class="form-control inputPrice">
                    <button :disabled=!purchaseOrderCorrectStock class="btn btn-primary" @click.prevent="purchaseOrder(index)">Buy</button>
                </div>
            </form>
        </div>
    </div>
</div>
    
</template>

<script>
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


            alert(this.purchaseOrderAmountInput)

        },
        checkOrderIsValid(order){
            
        }
    },
    computed:{
        purchaseOrderCorrectStock(){
            if(this.purchaseOrderAmountInput >= 1){
                return true
            }else{
                return false
            }
            
            
        }
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
