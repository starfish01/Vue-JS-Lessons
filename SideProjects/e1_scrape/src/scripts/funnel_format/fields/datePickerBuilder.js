export function datePickerBuilder(data) {
    let field = {}

    field["type"] = 'Date'
    field["title"] = data.title
    field["display"] = {
        "width": data.width,
        "widget": {
            "id": "datePicker"
        }
    }
    field["validations"] = [
        {
            "type": "Date"
        }
    ]

    if (data.required !== undefined) {
        field.validations.push({
            "required": true,
            "message": "This field is required."
        })
    }


    return field
}


// "date_of_birth": {
//     "type": "Date",
//     "title": "Date of Birth",
//     "display": {
//         "width": 3,
//         "widget": {
//             "id": "datePicker"
//         }
//     },
//     "validations": [
//         {
//             "type": "Date"
//         }
//     ],
//     "position": 1,
//     "contentModelTitle": "Sibling 1 - Date of Birth"
// },
