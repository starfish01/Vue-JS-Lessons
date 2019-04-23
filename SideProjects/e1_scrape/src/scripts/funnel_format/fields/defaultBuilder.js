import * as util from './util'

export function fieldBuilder(data) {

    let field = {}

//"id": "singleLine"

    field["type"] = util.dataTypeRef(data.type)
    field["title"] = data.title
    field["position"] = data.positionOfElement
    field["display"] = {
        "width": data.width,
        "widget": {
            "id": "singleLine"
        }
    }

    if (data.helpText != undefined && data.helpText.length > 0) {
        field.display["htmlAfter"] = data.helpText
    }

    // console.log(data.type)

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