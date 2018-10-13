<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="index in 5"
                    @click="clickToGetId(index-1)"
                    v-bind:class="{active: index === selected}"
                    
                    >
                Server #{{ index }} - {{ servers[index-1].status }}
            </li>
        </ul>
    </div>
</template>

<script>

import { eventBus } from '../../main';

export default {
    data: function() {
        return {
            servers:[
                {id:1, status: 'Normal'},
                {id:2, status: 'Critical'},
                {id:3, status: 'Unknown'},
                {id:4, status: 'Normal'},
                {id:4, status: 'At risk'}
            ],
            selected: null
        }
    },
    methods: {
        clickToGetId (index){
            this.selected = index+1
            eventBus.$emit('clickedServer', this.servers[index]);
        }
    }

}
</script>

<style scoped>
li:hover{
    background-color: lightblue;
    cursor: pointer;
}

.active{
    background-color: blue;
}

</style>
