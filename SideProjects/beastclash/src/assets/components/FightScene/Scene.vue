<template>
    <div class="row">
        <div class="col-sm-6">
            <transition name="slidemonster" type="animation" appear>
                <img src="src\assets\images\monster.png" class="monsterClass" height="150px">
            </transition>
        </div>
        <div class="col-sm-6">
            <transition name="slide" type="animation" appear>
                <img src="src\assets\images\hero.png" class="heroClass" height="150px">
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            startAnimation:false
        }
    },
    methods:{
        startAnimationfunction(){
            this.startAnimation = true
            console.log(this.startAnimation)
        },
    },
    created(){
        console.log(this.startAnimation)
        this.startAnimationfunction();
    }

}
</script>

<style lang="scss" scoped>

    .fightScene{
        height: 250px;
    }
    .row{
        max-width: 100%;
        padding: 20px;
    }

    .heroClass{
        float: right;
    }

    .monsterClass{
        margin-left: 25px;
    }


.slide-enter {
	opacity: 0;
}
.slide-enter-active{
	animation:slide-in 1s ease-out forwards;
	transition: opacity 1s;
}

.slidemonster-enter{
	opacity: 0;
}
.slidemonster-enter-active{
	animation:slidemonster-in 1s ease-out forwards;
	transition: opacity 1s;
}

@keyframes slide-in {
	from {
        transform:translateX(200px);
	}
	to {
		transform: translateX(0)
	} 
}

@keyframes slidemonster-in {
	from {
        transform:translateX(-200px);
	}
	to {
		transform: translateX(0)
	} 
}

    
    

</style>
