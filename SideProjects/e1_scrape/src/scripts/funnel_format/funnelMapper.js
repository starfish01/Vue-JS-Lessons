var funnelMap = [];
var someOther = 'hello'


import * as slugit from './slugifyItems'

import * as singleLine from './fields/singleLineBuilder'
import * as datePicker from './fields/datePickerBuilder'

import * as defaultBuilder from './fields/defaultBuilder'


export function someOtherValue(){
    // Object.assign(funnelMap)
    return Object.assign(funnelMap)
}

export function funnelMapper(data) {

    console.log('3')

    let scrapeData = data[0].content

    scrapeData.forEach((data) => {

        let fieldSetTitleSlug = slugit.slugFn(data.title)

        let fields = fieldSetFields(data.fieldGroupfields)

        funnelMap[fieldSetTitleSlug] = {
            type: "Group",
            "display": {
                "width": 12
            },
            "position": data.positionOfGroup,
            "items": fields,
            "title": data.title
        }
    })

    return funnelMap

}


function fieldSetFields(data) {

    let field = {}


    data.forEach((data) => {

        let title = data.elementID + "_" + slugit.slugFn(data.title)

        field[title] = defaultBuilder.fieldBuilder(data)

    })

    return field
}

export { funnelMap }
