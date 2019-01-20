export {JStemplate};

class JStemplate {

    jsItems =[];
    gurdianList =[];
    normalList=[];
    requiredList=[];

    constructor(jsItems) {
        this.jsItems = jsItems;
        this.mainWorkFlow();
    }

    mainWorkFlow(){
        for (let index = 0; index < this.jsItems.length; index++) {
            //first check
            if(this.jsItems[index].activeField != '' ){}


            let activator = this.jsItems[index].activeField;
            
            //work out fields needed
            let effectedFields = this.fieldsThatWillBeEffected(this.jsItems[index].firstActive,this.jsItems[index].lastActive)
            

           //check if guardian is selected
           if(this.jsItems[index].guardianField) {
               this.guardianSelected(this.jsItems[index]);
           }
        }
    }

    fieldsThatWillBeEffected(firstActive,lastActive) {

        console.log(firstActive)
        console.log(lastActive)

        // if(this.firstField.length > 0 & this.lastField.length > 0){
        //     if(this.firstField < this.lastField){
        //       let numberArray = []
        //       for (let index =  Number(this.firstField); index <= this.lastField; index++) {
        //         numberArray.push(index);
        //       }
              
        //       return numberArray;
        //     }
        //   }
        //   return [this.firstField];

    }

    guardianSelected(item) {
        
        console.log(item.activeField)
    }

    
}