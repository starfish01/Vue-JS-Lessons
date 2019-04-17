export function dataTypeRef(data){
    let val = ''
    switch (data) {
        case 'singleLine':
            val = "String"
            break;
    
        default:
            break;
    }

    return val
}