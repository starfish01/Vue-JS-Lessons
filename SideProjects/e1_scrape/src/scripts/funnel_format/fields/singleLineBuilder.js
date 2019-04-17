export function singleLineBuilder(data) {
    let singlineField = {}

    singlineField["type"] = "String"
    singlineField["title"] = data.title
    singlineField["display"] = {
        "width": data.width,
        "widget": {
            "id": "singleLine"
        }
    }
    singlineField["position"] = data.positionOfElement

    // console.log(data)

    if (data.required !== undefined) {
        if (singlineField["validations"] === undefined) {
            singlineField["validations"] = []
        }
        singlineField.validations.push({
            "required": true,
            "message": "This field is required."
        })
    }

    return singlineField
}