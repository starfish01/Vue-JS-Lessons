export { JStemplate };

class JStemplate {

    jsItems = [];
    gurdianList = [];
    normalList = [];
    requiredList = [];

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

            if(this.jsItems[index].label){
                let labelToPrint =  `/* ${this.jsItems[index].labelValue} */`
                if(this.jsItems[index+1] != null){
                    if(this.jsItems[index+1].guardianField) {
                        this.gurdianList.push(labelToPrint);
                    } else if(!this.jsItems[index+1].guardianField) {
                        this.normalList.push(labelToPrint);
                    }
                }else{
                    this.normalList.push(labelToPrint);
                }
                continue;
            }


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

            //Single Conditionally Required Field
            if(this.jsItems[index].singleRequiredField){
                this.requiredSelected(this.jsItems[index].activeField,effectedFields,this.jsItems[index].conditions,this.jsItems[index].requiredExclude)
                continue;
            }

            //regular hide show
            this.normalSelected(this.jsItems[index].activeField,effectedFields,this.jsItems[index].conditions)

            //check if its required
            if(this.jsItems[index].required) {
                this.requiredSelected(this.jsItems[index].activeField,effectedFields,this.jsItems[index].conditions,this.jsItems[index].requiredExclude)
            }

        }
    }

    conditionallyRequiredSelect(){

    }

    requiredSelected(active,toggleFields,conditions,excluded) {

        if(excluded != null){
            
            Object.keys(excluded).forEach(element => {

                toggleFields.splice(toggleFields.indexOf(Number(element)),1);
                
            });
           
        }

        // let conditionSting = this.conditionStringBuilder(conditions)

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

    gurardianTemplate(){
        let topElement = `window.enableGuardianToggles = function(guardianContainer){`
        let bottomElement = `};$("#guardians fieldset").each(function(index, guardianContainer){ enableGuardianToggles(guardianContainer); });`
    
        return {topElement,bottomElement}
    }

    requiredTemplate() {
        return `function conditional_required_v5(e,r,a){$(".form:first").submit(function(i){if(a.constructor===Array)for(var o=$(".form").parent(),n=$('[name*="formgroup_ids['+e+']"]'),l=0;l<a.length;l++){var d=$("[data-formgroup-id="+a[l]+"]");if(n.parent().hasClass("btn-radio")&&(n=$('[name*="formgroup_ids['+e+']"]:checked')),d.find(".btn-radio").length>0)void 0==(t=d.find('[name*="formgroup_ids['+a[l]+']"]:checked').val())&&(t="");else if(d.find(".btn-checkbox").length>0)t=$('[name="formgroup_ids['+a[l]+'][identify-type][]"]:checked').length>0?"field_is_set":"";else var t=d.find('[name*="formgroup_ids['+a[l]+']"]:first').val();""==t&&n.val()==r&&(i.preventDefault(),d.addClass("has-error"),0==d.find(".has-error.help-block").length&&d.append('<p class="has-error help-block">This field is required.</p>'),o.find(".alert.alert-danger:first").remove(),o.prepend('<div class="alert alert-danger">Some errors were encountered, please ensure all applicable fields are filled out</div>'),$("html,body").scrollTop(0))}else i.preventDefault(),console.log("Conditional Required V4 Error: Third argument must be an array.")})}`
    }

    guardianConfirmation() {
        return `var confirm_checkbox='<div class="row" style="margin-top:20px"><div class="col-md-12 formgroup-container" id="custom-checkbox"> <div class="form-group" style="margin-bottom:0px;"> <div class="btn-group-vertical btn-group-checkbox" data-toggle="buttons"><input type="hidden" name="[guardian_confirmation_checkbox]" value=""> <label class="btn btn-default btn-checkbox "> <input type="checkbox" name="[guardian_confirmation_checkbox][]" value="confirm"> I acknowledge that all legal guardians and carers for the student have been entered into this application </label></div> </div> </div></div>';if($("#guardians").length>0){$("#add_guardian").after(confirm_checkbox);$('button[type="submit"]').prop("disabled","disabled");$(document).on("change",'[name*="[guardian_confirmation_checkbox]"]',function(){if($('[name*="[guardian_confirmation_checkbox]"]:checked').val()=="confirm"){$('button[type="submit"]').prop("disabled",false)}else{$('button[type="submit"]').prop("disabled","disabled")}})}`
    }


}