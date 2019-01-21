export { JStemplate };

class JStemplate {

    jsItems = [];
    gurdianList = [];
    normalList = [];
    requiredList = [];

    // constructor(jsItems) {
    //     this.jsItems = jsItems;
    //     this.mainWorkFlow();
    // }

    resetValues(){
        this.gurdianList = [];
        this.normalList = [];
        this.requiredList = [];
    }

    getData(jsItems) {

        this.jsItems = jsItems;

        this.resetValues()

        this.mainWorkFlow();

        let x = {
            gurdianList: this.gurdianList,
            normalList: this.normalList,
            requiredList: this.requiredList
        }

        return x;
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
                this.guardianSelected(this.jsItems[index].activeField,effectedFields,this.jsItems[index].conditions);
                continue;
            }

            //regular hide show
            this.normalSelected(this.jsItems[index].activeField,effectedFields,this.jsItems[index].conditions)

            //check if its required
            if(this.jsItems[index].required) {
                this.requiredSelected(this.jsItems[index].activeField,effectedFields,this.jsItems[index].conditions)
            }



        }
    }

    requiredSelected(active,toggleFields,conditions) {
//conditional_required_v5(17758,"0",[17841,17843,17846,17847,17848,17849,17850,17852,17853,17854,17855,17856,17857,17858,17860,17861]);
        let conditionSting = this.conditionStringBuilder(conditions)

        for (let i = 0; i < conditions.length; i++) {
            let field = conditions[i];
            let newRequired = `conditional_required_v5(${active},'${field}',[${toggleFields}]);`
            this.requiredList.push(newRequired);
        }
        
    }


    normalSelected(active,toggleFields,conditions) {

        let conditionSting = this.conditionStringBuilder(conditions)
        
        let newToggle = `forms.toggle_fields(${active},[${toggleFields}],[${conditionSting}]);`
        this.normalList.push(newToggle);
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

    conditionStringBuilder(conditionString) {

        let newString ='';
        for (let i = 0; i < conditionString.length; i++) {
            newString +="'"+conditionString[i]+"',";
        }
        return newString.substring(0, newString.length-1)
    }

    guardianSelected(active,toggleFields,conditions) {
        
        let conditionSting = this.conditionStringBuilder(conditions)
        
        let newGuardian = `forms.toggleGuardianFields(${active},[${toggleFields}],[${conditionSting}],guardianContainer);`
        this.gurdianList.push(newGuardian);

    }


}