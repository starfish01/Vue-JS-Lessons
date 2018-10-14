<template>
    <div>
        <h3>The Quote</h3>
        <slot></slot>
        <p>{{counter}}</p>
        <button @click="addToCounter">Add 1</button>
    </div>    
</template>
<script>
    export default {
        data: function() {
            return{
                counter: 0
            }
        },
        methods: {
            addToCounter() {
                this.counter += 1;
            }
        },
        deactivated() {
            console.log('deactived')
        },
        activated() {
            console.log('activated')
        },

        
    }

    
</script>
<style scoped>


</style>