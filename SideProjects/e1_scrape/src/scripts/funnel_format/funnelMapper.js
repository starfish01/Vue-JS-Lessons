var funnelMap = {};

import * as slugit from './slugifyItems'

import * as singleLine from './fields/singleLineBuilder'


export function funnelMapper(data) {

    console.log(data)

    let scrapeData = data[0].content

    scrapeData.forEach((data)=>{

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

}


function fieldSetFields(data) {

    let q = {}


    data.forEach((data)=>{

        let title = slugit.slugFn(data.title)

        switch (data.type) {
            case 'singleLine': 
            q[title] =  singleLine.singleLineBuilder(data)
           
            break;
        
            default:
                break;
        }
        
    })

    return q
}

export { funnelMap }
