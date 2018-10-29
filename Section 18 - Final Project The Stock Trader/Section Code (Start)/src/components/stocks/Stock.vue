<template>
<div>
   <div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">{{index.name}}</h3>
  </div>
  <div class="panel-body">
    <p>Current Stock Price ${{index.currentPrice}}</p>
    <input type="text" class="form-control inputPrice">
     <button class="btn btn-primary">Buy</button> <button class="btn btn-warning">Sell</button>
  </div>
</div>
</div>
    
</template>

<script>
export default {
    props:{
        index: {
          type: Object
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
