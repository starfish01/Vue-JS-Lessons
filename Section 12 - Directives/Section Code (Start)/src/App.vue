<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'this is some text'"></p>
                <p v-html="'<strong>Some other text</strong>'"></p>
            </div>
            <hr>

            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight.delay="'red'">Color This</p>
                <p v-local-highlight:background.delay.blink="'red'">Color This</p>
                
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight':{
                bind(el,binding, vnode) {
                    var delay = 0;

                    if(binding.modifiers['delay']){
                        delay = 3000;
                    }

                    if(binding.modifiers['blink']){

                        let mainColor = binding.value
                        let secondColor = 'green'
                        let currentColor = binding.value

                        setTimeout(() => {

                            setInterval(()=>{
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor
                                    
                                    if(binding.arg == 'background'){
                                        el.style.backgroundColor = currentColor;
                                    }else{
                                        el.style.color = currentColor;
                                    }
                                
                            },1000);

                        },delay)


                        
                    }else{
                        setTimeout(() => {

                            if(binding.arg == 'background'){
                                el.style.backgroundColor = binding.value;
                            }else{
                                el.style.color = binding.value;
                            }

                        },delay)
                    }

                }
            }
        }
    }
</script>

<style>

</style>
