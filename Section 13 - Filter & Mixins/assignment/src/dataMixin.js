export const dataMixin = {
    data(){
        return{
            reverseText:'',
            reverseTextUsingCompute:''
        }
    },
    filters: {
        reverseText(value){
            return value.split("").reverse().join("");
        }
    },
    computed:{
        reverseTextUsingComputefunction(){
            return this.reverseTextUsingCompute.split("").reverse().join("") + " - " + this.reverseTextUsingCompute.length;
        }
    }
}