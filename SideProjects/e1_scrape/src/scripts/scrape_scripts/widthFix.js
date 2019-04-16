export function widthCalculate(data) {

    if(data === 12) {
        return 12;
    }else if(data >= 6 ){
        return 6;
    }else if(data >= 4){
        return 4;
    }
    return 3;
}