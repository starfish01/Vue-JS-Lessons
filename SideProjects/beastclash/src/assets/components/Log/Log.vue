<template>
    <div>
        <ul class="list-group">
            <transition-group name="slide" type="animation" appear>
                <li :style="logitem.id == 1 ? 'background-color: #F7F6D9' : 'background-color: #F78380'" 
                class="list-group-item"
                :class="{healingClass: logitem.heal}" 
                v-for="(logitem,i) in logData"
                :key="i" > 
                <img :src="logitem.id == 1 ? 'src/assets/images/monster.png' : 'src/assets/images/hero.png'" height="30px"> 
                The {{ playerData[logitem.id].name }} <span v-if="!logitem.heal"> attacked </span><span v-else>Healed</span> with {{logitem.attackPower}} Power</li>
        </transition-group>
        </ul>
    </div>
</template>

<script>
export default {
    
    props:{
        logData:{
            options:Object
        },
        playerData:{
            options:Object
        }
    }

}
</script>

<style scoped>

.healingClass{
    background-color: blue !important;
    color: white;
}

li{
    cursor: pointer;
}
li:hover{
    background-color: #D3DDC3 !important;
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


</style>
