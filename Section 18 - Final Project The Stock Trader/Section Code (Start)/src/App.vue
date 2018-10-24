<template>
    <div class="container">
        <app-header></app-header>
        <app-homepage></app-homepage>
        <app-portfolio></app-portfolio>
        <app-stocks></app-stocks>

    </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Homepage from './components/homepage/Homepage.vue'
import Portfolio from './components/Portfolio/Portfolio.vue'
import Stocks from './components/Stocks/Stocks.vue'

    export default {
        components:{
            appHeader:Header,
            appHomepage:Homepage,
            appPortfolio:Portfolio,
            appStocks:Stocks
        }

    }
</script>

<style>

body {
    padding-top: 60px;
  }

</style>
