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
        <app-action-box :actionFn="actionFunction"></app-action-box>
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
        logData:[],
        randomValues:{
        }
      }
    },
    methods: {
      actionFunction(action){
        switch (action) {
          case 0:
            this.giveUp();
            break;
          case 1:
            this.attack();
          break;
          case 2:
            this.specialAttack();
          break;
          case 3:
            this.heal();
          break;
          default:
          alert('Something broke :/');
          break;
        }
      },
      attack(){
        let heroAttack = this.randomNumberGraber();
        let monsterAttack = this.randomNumberGraber();
        this.playerData[1].health -= heroAttack;
        this.logData.push({id:0, attackPower:heroAttack})

        this.playerData[0].health -= monsterAttack;
        this.logData.push({id:1, attackPower:monsterAttack})
        

      },
      specialAttack(){
        let heroAttack = this.randomNumberGraber()*2;
        let monsterAttack = this.randomNumberGraber();
        this.playerData[1].health -= heroAttack;
        this.logData.push({id:0, attackPower:heroAttack})

        this.playerData[0].health -= monsterAttack;
        this.logData.push({id:1, attackPower:monsterAttack})
      },
      heal(){
        let heroHeal = this.randomNumberGraber();
        let monsterAttack = this.randomNumberGraber();


        this.playerData[0].health += heroHeal;
        this.logData.push({id:0, attackPower:heroHeal, heal:true})

        this.playerData[0].health -= monsterAttack;
        this.logData.push({id:1, attackPower:monsterAttack})
      },
      giveUp(){},

      randomNumberGraber(){
        return Math.floor((Math.random() * 10) + 1);
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
