<template>
    <li class="list-group-item">
        Name:{{stock.id}} 
        Date:{{stock.time}} 
        Purchase Price:{{stock.purchasePrice}} 
        Purchase Order:{{stock.purchaseOrder}}
        Position:$XXX.XX
        <button class="btn btn-primary">Sell</button>
    </li>

</template>

<script>
export default {
    props:{
        stock: {
          type: Object
        }
    },

}
</script>

<style>

</style>
