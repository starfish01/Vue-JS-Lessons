<template>
  <div class="container" id="app">
    <div class="row card">
      <div class="col-sm-12 card-body">
        <app-hud :playerData="playerData"></app-hud>
      </div>
    </div>

    
        <app-fight-scene></app-fight-scene>
    

    <div class="row card">
      <div class="offset-sm-3"></div>
      <div class="card-body">
        <app-action-box :attackFn="attackFunction"></app-action-box>
        <div class="offset-sm-3"></div>
      </div>
    </div>

    <div class="row card">
      <div class="offset-sm-3"></div>
      <div class="card-body">
       <app-log :logData="logData" :playerData="playerData"></app-log>
        <div class="offset-sm-3"></div>
      </div>
    </div>

  </div>
</template>

<script>
  import HUD from './assets/components/HUD/HUD.vue';
  import FightScene from './assets/components/FightScene/Scene.vue';
  import ActionBox from './assets/components/ActionBox/ActionBox.vue';
  import Log from './assets/components/Log/Log.vue';

  export default {
    data(){
      return{
        playerData:[ {
          id:'0',
          name:'Hero',
          health:30
        },{
          id:'1',
          name:'Monster',
          health:60
        }],
        logData:[
          {
          id:0,
          attackPower:10
        },{
          id:1,
          attackPower:10
        },{
          id:0,
          attackPower:10
        },{
          id:1,
          attackPower:10
        }]
      }
    },
    methods: {
      attackFunction(){
        alert('attack');
      }
    },
    components: {
      appHud: HUD,
      appFightScene: FightScene,
      appActionBox: ActionBox,
      appLog: Log
    }
  }

</script>

<style lang="scss">

</style>
