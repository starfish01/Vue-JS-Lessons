
window.onload = function(){
new Vue({ 
    el: '#app', 
    data:{ 
        yourHealth:100,
        mostersHealth:100,
        userActionButtons:false,
        eventsInMatch:['New Game Started']

    }, 
      methods: { 
        startNewGame: function(event){ 
            alert('Starting New Game')
            this.yourHealth = 100;
            this.mostersHealth = 100;
            this.eventsInMatch = ['New Game Started']; 
        },
        userEvent: function(type){

            if(type === 'attack'){
                var attackPowerYou = this.randomNumberForAttackAndHeal();
                var attackPowerMonster = this.randomNumberForAttackAndHeal();
                console.log('attack')
            }else if(type === 'specialAttack'){
                var attackPowerYou = this.randomNumberForAttackAndHeal()+this.randomNumberForAttackAndHeal();
                var attackPowerMonster = this.randomNumberForAttackAndHeal();
                console.log('specialattack')
            }else{
                var healPowerYou = this.randomNumberForAttackAndHeal();
                var attackPowerMonster = this.randomNumberForAttackAndHeal();
            }
            

            if(type === 'attack' || type === 'specialAttack'){
                this.yourHealth -= attackPowerMonster
                this.mostersHealth -= attackPowerYou
            }else{
                this.yourHealth += healPowerYou
                attackPowerYou = healPowerYou
                this.yourHealth -= attackPowerMonster
            }


            if(this.displayEvent(attackPowerYou, attackPowerMonster,type)){
                this.endGame()
            }

        },
        randomNumberForAttackAndHeal: function (type) {
                return this.random = Math.floor(Math.random() * (10 - 1 + 1)) + 1
        },
        displayEvent:function(attackPowerYou, attackPowerMonster,type){
            
            if(type === 'heal'){
                this.eventsInMatch.push('You healed with ' + attackPowerYou)
                this.eventsInMatch.push('The monster attacked with ' + attackPowerMonster)
                return
            }
            
            if(this.yourHealth && this.mostersHealth > 0){
                //both alive
                this.eventsInMatch.push('You attacked with ' + attackPowerYou)
                this.eventsInMatch.push('The monster attacked with ' + attackPowerMonster)
            }else if(this.yourHealth > 0){
                //monster dead
                this.eventsInMatch.push('The monster has been slayin')

            }else{
                //your dead
                this.eventsInMatch.push('The monster has killed you')
            }
        },
        endGame:function(){

        }
    } 
  }
);  }