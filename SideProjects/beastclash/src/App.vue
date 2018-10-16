<template>
  <div class="container" id="app">
    <div class="row card">
      <div class="col-sm-12 card-body">
        <app-hud :playerData="playerData"></app-hud>
      </div>
    </div>

    <div class="row card">
      <div class="offset-sm-3"></div>
      <div class="col-sm-6 card-body">
        <app-fight-scene></app-fight-scene>
        <div class="offset-sm-3"></div>
      </div>
    </div>

    <div class="row card">
      <div class="offset-sm-3"></div>
      <div class="col-sm-6 card-body">
        <app-action-box></app-action-box>
        <div class="offset-sm-3"></div>
      </div>
    </div>

    <div class="row card">
      <div class="offset-sm-3"></div>
      <div class="col-sm-6 card-body">
       <app-log></app-log>
        <div class="offset-sm-3"></div>
      </div>
    </div>

  </div>
</template>

<script>
  import HUD from './assets/components/HUD/HUD.vue'
  import FightScene from './assets/components/FightScene/Scene.vue'
  import ActionBox from './assets/components/ActionBox/ActionBox.vue'
  import Log from './assets/components/Log/Log.vue'

  export default{
    data(){
      return{
        playerData:[{
          name:'Monster',
          health:100
        },
        {
          name:'Hero',
          health:30
        }]
      }
    },
    components:{
      appHud: HUD,
      appFightScene: FightScene,
      appActionBox: ActionBox,
      appLog: Log
    }
  }

</script>

<style lang="scss">

</style>
