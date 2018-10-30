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
   
    <form>
        <input v-model="purchaseOrderAmountInput" type="text" class="form-control inputPrice">
        <button class="btn btn-primary" @click="purchaseOrder(index.id)">Buy</button>
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
            if(this.checkOrderIsValid(order)){
                alert("true")
            }

             alert(this.purchaseOrderAmountInput)
        },
        checkOrderIsValid(order){
            order = order.trim();
        }
    }
}
</script>

<style>
.inputPrice{
  width: 50%;
  display: inline-block;
}

</style>
