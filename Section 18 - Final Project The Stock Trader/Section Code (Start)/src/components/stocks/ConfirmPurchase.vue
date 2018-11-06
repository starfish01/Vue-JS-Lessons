<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Confirm Purchase</h3>
        </div>
        <div class="panel-body">
            <p><b>Current Stock Price: ${{index.currentPrice}}</b> </p>   
            <form >
                <div class="form-group">
                    <label for="order">Order: ${{purchaseOrderAmountInput}}</label>
                    
                    
                    <button :disabled=!purchaseOrderCorrectStock class="btn btn-primary" @click.prevent="purchaseOrder(index)">Buy</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        purchaseOrderAmountInput: String,
            index: {
                type: Object
            }
        },
    

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
