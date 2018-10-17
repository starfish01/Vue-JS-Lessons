<template>
    <div>
        <app-actions :actionFn="actionFn"></app-actions>
    </div>
</template>

<script>

    import Actions from "./Actions.vue"
    import InfoBox from "./Infobox.vue"

export default {
    props:{
        actionFn: Function
    },
   components:{
        appActions: Actions,
        appInfoBox: InfoBox
    }

}
</script>

<style scoped>


</style>
