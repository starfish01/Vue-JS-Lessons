<template>
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <a class="navbar-brand" @click="buttonClicked('appHomepage')" href="#">Stock Trader</a>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li><a href="#" @click="buttonClicked('appPortfolio')">Portfolio</a></li>
                        <li><a href="#" @click="buttonClicked('appStocks')">Stocks</a></li>
                    </ul>
      
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">End day</a></li>
                        <li><a href="#">Save & Load</a></li>
                        <li><a href="#">Funds: $value</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    methods:{
        buttonClicked(data){
            this.$emit('componentButton', data)
        }
    }

}
</script>

<style>

</style>
