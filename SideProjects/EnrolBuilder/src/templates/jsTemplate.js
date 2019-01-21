export { JStemplate };

class JStemplate {

    jsItems = [];
    gurdianList = [];
    normalList = [];
    requiredList = [];

    constructor(jsItems) {
        this.jsItems = jsItems;
        this.mainWorkFlow();
    }

    mainWorkFlow() {
        for (let index = 0; index < this.jsItems.length; index++) {

            //first check if the activator and effected are inputed
            if (this.jsItems[index].activeField == null || this.jsItems[index].firstActive == null ||
                this.jsItems[index].activeField == '' || this.jsItems[index].firstActive == '') {
                continue;
            }

            let activator = this.jsItems[index].activeField;

            //work out fields needed
            let effectedFields = this.fieldsThatWillBeEffected(this.jsItems[index].firstActive, this.jsItems[index].lastActive,this.jsItems[index].includeField)

            //fields to be excluded
            effectedFields = this.fieldsThatWillBeExcluded(effectedFields,this.jsItems[index].excludeField)

            //check if guardian is selected
            if (this.jsItems[index].guardianField) {
                this.guardianSelected(this.jsItems[index]);
                continue;
            }

            //regular hide show
            this.normalSelected(this.jsItems[index])

            //check if its required
            if(this.jsItems[index].required) {
                
            }



        }
    }



    normalSelected(item) {
        let newNormalItem = ``
        normalList.push(newNormalItem);
    }

    fieldsThatWillBeExcluded(currentList, toBeExcluded) {

        for(var i in toBeExcluded) {
            let itemToBeRemoved = currentList.indexOf(Number(i))
            if(itemToBeRemoved != -1){
                currentList.splice(itemToBeRemoved, 1)
            }
        }
        return currentList;
    }

    fieldsThatWillBeEffected(firstActive, lastActive, toBeIncluded) {

        let returnList = [];

        if (firstActive <= 0) {
            return;
        }

        if (lastActive == '' || lastActive == null || lastActive <= 0) {
            returnList.push(firstActive)
            return returnList;
        }

        if (firstActive < lastActive) {
            let numberArray = []
            for (let index = Number(firstActive); index <= lastActive; index++) {
                numberArray.push(index);
            }
            returnList = numberArray;
        } else {
            returnList.push(firstActive)
        }

        
        if(toBeIncluded != null && toBeIncluded.length > 0){
            for (let index = 0; index < toBeIncluded.length; index++) {
                returnList.push(toBeIncluded[index]);
            }
        }

        return returnList;
    }


    guardianSelected(item) {
        let newGuardian = ``
        gurdianList.push(newGuardian);
    }


}