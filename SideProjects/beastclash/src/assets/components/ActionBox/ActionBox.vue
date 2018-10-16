<template>
    <div>
        <app-actions :attackFn="attackFn"></app-actions>
    </div>
</template>

<script>

    import Actions from "./Actions.vue"
    import InfoBox from "./Infobox.vue"

export default {
    props:{
        attackFn: Function
    },
   components:{
        appActions: Actions,
        appInfoBox: InfoBox
    }

}
</script>

<style scoped>


</style>
