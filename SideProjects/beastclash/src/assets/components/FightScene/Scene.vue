<template>
    <div class="row">
        <div class="col-sm-6">
            <img src="src\assets\images\monster.png" class="monsterClass" height="150px">
        </div>
        <div class="col-sm-6">
            <img src="src\assets\images\hero.png" class="heroClass" height="150px">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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

    
    

</style>
