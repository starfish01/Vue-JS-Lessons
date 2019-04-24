import * as util from './util'

export function fieldBuilder(data) {

    if(data.type === "wysiwyg"){
        //Because there is no wysiwyg field we will 
        //need to do some trickery to get it to work
        return 
    }

    let field = {}

    field["type"] = util.dataTypeRef(data.type)
    field["title"] = data.title
    field["position"] = data.positionOfElement
    field["display"] = {
        "width": data.width,
        "widget": {
            
        }
    }

    //options
    if(data.options != undefined && data.options.length > 0){
        // console.log(data.options.length)
        field["options"] = data.options
    }


    //text afterfield
    if (data.helpText != undefined && data.helpText.length > 0) {
        field.display["htmlAfter"] = data.helpText
    }

    //placeholder text check
    if(data.placeholder != undefined && data.placeholder.length > 0){
        field.display.widget["placeholder"] = data.placeholder
    }

    /*
    singleLine = singleLine
    datepicker = dateInput
    radio = radio
    wysiwyg
    select = dropdown
    file
    textarea
    checkbox
    */

    if (data.required != undefined) {
        field["validations"] =
            {
                "message": "This field is required.",
                "required": true
            }
    }

    return field

}