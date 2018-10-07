
window.onload = function(){
new Vue({ 
    el: '#app', 
    data:{ 
        yourHealth:100,
        mostersHealth:100,
        eventsInMatch:['New Game Started']

    }, 
      methods: { 
        startNewGame: function(event){ 
            alert('Starting New Game')
            this.yourHealth = 100;
            this.mostersHealth = 100;
            this.eventsInMatch = ['New Game Started']; 
        },
        attack: function(){
            var attackPowerYou = this.randomNumberForAttackAndHeal();
            var attackPowerMonster = this.randomNumberForAttackAndHeal();

            this.yourHealth -= attackPowerYou
            this.mostersHealth -= attackPowerMonster

            if(this.displayEvent(attackPowerYou, attackPowerMonster)){
                this.endGame()
            }

        },
        randomNumberForAttackAndHeal: function (type) {
            if(type === 'attack'){
                return this.random = Math.floor(Math.random() * (10 - 1 + 1)) + 1
            }else if(type === 'specialAttack'){
                return this.random = Math.floor(Math.random() * (10 - 1 + 1)) + 1
            }else{
                return this.random = Math.floor(Math.random() * (10 - 1 + 1)) + 1
            }
            
        },
        displayEvent:function(attackPowerYou, attackPowerMonster){
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