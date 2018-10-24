<template>
    <div class="container">
        <app-header @componentButton="currentComponent = $event"></app-header>

    <keep-alive>
        <transition mode="out-in" appear name="slide" type="animation">
        <component :is="currentComponent"></component>
        </transition>
    </keep-alive>

    </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Homepage from './components/homepage/Homepage.vue'
import Portfolio from './components/Portfolio/Portfolio.vue'
import Stocks from './components/Stocks/Stocks.vue'

    export default {
        data(){
            return{
                currentComponent: 'appHomepage'
            }
        },
        components:{
            appHeader:Header,
            appHomepage:Homepage,
            appPortfolio:Portfolio,
            appStocks:Stocks
        }

    }
</script>



<style lang="sass">

@import url('/styles/sldeAnimation.scss');

body {
    padding-top: 60px;
  }




</style>
