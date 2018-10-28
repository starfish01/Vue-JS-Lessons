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
                        <li><a href="#" @click="actionButtonClicked('endDay')">End day</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#" @click="actionButtonClicked('save')">Save</a></li>
                                <li><a href="#" @click="actionButtonClicked('load')">Load</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Funds: ${{ walletValue }}</a></li>
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
        },
        actionButtonClicked(data){
            this.$emit('actionButtons',data)
        }
    },
    props:['walletValue']

}
</script>

<style>


.navbar-nav li:hover > ul.dropdown-menu {
    display: block;
}
.dropdown-submenu {
    position:relative;
}
.dropdown-submenu>.dropdown-menu {
    top:0;
    left:100%;
    margin-top:-6px;
}

</style>
