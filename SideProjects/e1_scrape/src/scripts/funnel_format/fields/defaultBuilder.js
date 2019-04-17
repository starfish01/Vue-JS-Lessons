import * as util from './util'

export function fieldBuilder(data){

    let field = {}

    field["type"] = util.dataTypeRef(data.type)
    field["title"] = data.title
    field["display"] = {
        "width": data.width,
        "widget": {
            "id": "singleLine"
        }
    }

    return field

}