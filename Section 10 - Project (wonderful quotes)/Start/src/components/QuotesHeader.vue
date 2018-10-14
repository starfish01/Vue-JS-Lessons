<template>
    <div class="row">
        <div class="col-xs-12">
            <h2>Quotes Added</h2>
            <div class="panel panel-default" >
                <div class="progressbar" :style=" {width: progressBarWidth}">
                {{quotes.length}} /10
                </div>
            </div>

            <h3>How the instructor set it up</h3>
            <div class="progress">
                <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style=" {width: progressBarWidth}">
                       {{quotes.length}} / 10 
                </div>
            </div> 

        </div>
    </div>
    </div>
</template>
<script>
export default {
    props:['quotes'],
    computed:{
        progressBarWidth: function(){

            return this.quotes.length*10 + '%'
        }
    }
}
</script>
<style scoped>

.panel{
    text-align: center;
    font-size: 20px;
    /* //background-color: blue; */
    border-radius: 10px ;
    
}
.progressbar{
    background-color: #2F7CBA;
    color: white;
    width: 0;
    border-radius: 10px ;
}

</style>
