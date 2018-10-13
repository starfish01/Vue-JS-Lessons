<template>
    <div class="col-xs-12 col-sm-6" v-if="serverDetails">
        <h3>Server Details</h3>
        <p>Server ID: {{ serverDetails.id }}</p>
        <p>Server Status: {{ serverDetails.status }}</p>
        <button @click="updateStatus">Set Server to Normal</button>
    </div>
    <div class="col-xs-12 col-sm-6" v-else>
        <h3>Please select a server</h3>
    </div>


</template>

<script>
import { eventBus } from '../../main';

export default {
    props:{
        serverDetails: Array
    },
    methods: {
        updateStatus(){
            this.serverDetails.status = "Normal"    
        }
    },
    created() {
		eventBus.$on('clickedServer', (data) => {
            this.serverDetails = data;
        })
    }
}


</script>

<style>

</style>
