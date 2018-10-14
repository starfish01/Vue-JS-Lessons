<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

                <button v-custom-directive:click="clicked" class="btn btn-primary">Click me</button>
                <div 
                    style="width: 100px; height: 100px; background-color:lightgreen"
                    v-custom-directive:mouseenter="mouseEnter"
                    v-custom-directive:mouseleave="mouseLeave"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
	    'custom-directive': {
		    bind(el,binding) {
                    // el.onclick = function (){
                    //     binding.value();
                    // }
                    const type = binding.arg;
                    const fn =binding.value;
                    el.addEventListener(type, fn);

                }
            }
        },
        methods:{
            clicked(){
                alert('clicked')
            },
            mouseEnter(){
                console.log('Mouse Enter')
            },
            mouseLeave(){
                console.log('Mouse Leave')
            },
        }
    }

</script>

<style>


.something{
    background-color: red;
}

</style>
