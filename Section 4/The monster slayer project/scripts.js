
window.onload = function(){
new Vue({ 
    el: '#app', 
    data:{ 
        yourHealth:100,
        mostersHealth:100,
        userActionButtons:true,
        eventsInMatch:[],
        noEvents: true

    }, 
      methods: { 
        startNewGame: function(event){ 
            alert('Starting New Game')
            this.yourHealth = 100;
            this.mostersHealth = 100;
            this.eventsInMatch = []; 
            this.userActionButtons = false;
        },
        userEvent: function(type){

            if(type === 'attack'){
                var attackPowerYou = this.randomNumberForAttackAndHeal();
                var attackPowerMonster = this.randomNumberForAttackAndHeal();
            }else if(type === 'specialAttack'){
                var attackPowerYou = this.randomNumberForAttackAndHeal()+this.randomNumberForAttackAndHeal();
                var attackPowerMonster = this.randomNumberForAttackAndHeal();
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

            if(this.displayEvent(attackPowerYou, attackPowerMonster,type) === false){
                this.endGame()
            }

        },
        randomNumberForAttackAndHeal: function (type) {
                return this.random = Math.floor(Math.random() * (10 - 1 + 1)) + 1
        },
        displayEvent:function(attackPowerYou, attackPowerMonster,type){
            
            if(type === 'heal'){
                this.eventsInMatch.unshift({
                    text: 'You healed with ' + attackPowerYou,
                    isPlayer:true
                })
                this.eventsInMatch.unshift({
                    text: 'The monster attacked with ' + attackPowerMonster,
                    isPlayer:false
                })
                return true
            }
            
            if(this.yourHealth  > 0 && this.mostersHealth > 0){
                //both alive
                this.eventsInMatch.unshift({
                    text: 'You attacked with ' + attackPowerYou,
                    isPlayer:true
                })
                this.eventsInMatch.unshift({
                    text: 'The monster attacked with ' + attackPowerMonster,
                    isPlayer:false
                })

            }else if(this.yourHealth > 0){
                //monster dead
                this.eventsInMatch.unshift({
                    text: 'The monster has been slayin',
                    isPlayer:true
                })
                return false
                
            }else{
                //your dead
                this.eventsInMatch.unshift({
                    text: 'The monster has killed you',
                    isPlayer:false
                })
                return false
            }
        },
        endGame:function(){
            this.userActionButtons = true
        }
    }
  }
);  }