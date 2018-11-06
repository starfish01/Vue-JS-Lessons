<template>
    <div class="container">
        <app-header :walletValue="walletValue" 
        @componentButton="currentComponent = $event" 
        @actionButtons="actionButton($event)"></app-header>

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
import Charts from './components/Portfolio/Charts.vue'
import Stocks from './components/Stocks/Stocks.vue'

import { mapGetters, mapActions } from 'vuex'



    export default {
        data(){
            return{
                currentComponent: 'appHomepage',
         
            }
        },
        components:{
            appHeader:Header,
            appHomepage:Homepage,
            appPortfolio:Portfolio,
            appStocks:Stocks,
            appCharts:Charts
        },
        methods:{
            actionButton(data){
                if(data == 'endDay'){
                    if(confirm("Are you sure you want to leave today?")){
                        alert("Tomorrow is a new Day, happy Tradding");
                    this.$store.dispatch('nextDayPriceChange')
                    }

                }else if(data == 'save'){
                    console.log('save')
                    this.$store.dispatch('saveOnline')
                }else if(data == 'load'){
                    console.log('load')
                    this.$store.dispatch('loadOnlineData')
                }else if(data == 'clearData'){
                    this.$store.dispatch('clearLocalData')
                }
            },
            ...mapGetters([
                'nextDayPriceChange'
            ]),
            ...mapActions([
                'clearLocalData'
            ]),
            
        },
        computed:{
        ...mapGetters([
            'walletValue'
            ])
        },
        created() {
            this.$store.dispatch('nextDayPriceChange')
        },
    }
</script>



<style >

.slide-enter{
	opacity: 0;
}
.slide-enter-active{
	animation:slide-in 0.5s ease-out forwards;
	transition: opacity 0.5s;
}
.slide-leave{}
.slide-leave-active{
	animation:slide-out 0.5s ease-out forwards;
	transition: opacity 0.5s;
	opacity: 0;
}
@keyframes slide-in {
	from {
		transform:translateY(20px);
	}
	to {
		transform: translateY(0)
	} 
}
@keyframes slide-out {
	from {
		transform:translateY(0);
	}
	to {
		transform: translateY(20px)
	} 
}






body {
    padding-top: 60px;
}




</style>
