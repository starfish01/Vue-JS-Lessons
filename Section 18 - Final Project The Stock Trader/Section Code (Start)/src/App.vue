<template>
    <div class="container">
        <app-header @componentButton="currentComponent = $event" @actionButtons="actionButton($event)"></app-header>

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
                currentComponent: 'appHomepage',
                
            }
        },
        components:{
            appHeader:Header,
            appHomepage:Homepage,
            appPortfolio:Portfolio,
            appStocks:Stocks
        },
        methods:{
            actionButton(data){
                if(data == 'endDay'){
                    console.log('end day')
                }else if(data == 'save'){
                    console.log('save')
                }else if(data == 'load'){
                    console.log('load')
                }
            }
        }

    }
</script>



<style>

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
