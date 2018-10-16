<template>
    <div>
        <ul class="list-group">
            <li :style="logitem.id == 1 ? 'background-color: #F7F6D9' : 'background-color: #F78380'" class="list-group-item" :key="i" v-for="(logitem,i) in logData"> <img :src="logitem.id == 1 ? 'src/assets/images/monster.png' : 'src/assets/images/hero.png'" height="30px"> The {{ playerData[logitem.id].name }} attacked with {{logitem.attackPower}} Power</li>
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

li{
    cursor: pointer;
}
li:hover{
    background-color: #D3DDC3 !important;
}

</style>
