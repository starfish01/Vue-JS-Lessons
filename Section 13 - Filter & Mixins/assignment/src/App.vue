<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>

                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h3>Exercise 1 - Filter Reverse Text</h3>
                <input v-model="reverseText">
                <p>{{ reverseText | reverse-text }}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h3>Exercise 2 - Counts the length and appends it</h3>
                <p>{{ reverseText | count-text-and-append }}</p>
                

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h3>Exercise 3 - Do 1 and 2 using computed instead</h3>
                <input v-model.lazy="reverseTextUsingCompute">
                <p>{{ reverseTextUsingComputefunction }}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->

                
            </div>
        </div>
    </div>
</template>

<script>
import {dataMixin} from './dataMixin'

    export default {
        
        mixins:[dataMixin]

    }
</script>

<style>
</style>
