<template>
    <div>
        <app-actions></app-actions>
    </div>
</template>

<script>

    import Actions from "./Actions.vue"
    import InfoBox from "./Infobox.vue"

export default {
   

   components:{
        appActions: Actions,
        appInfoBox: InfoBox
    }

}
</script>

<style scoped>


</style>
