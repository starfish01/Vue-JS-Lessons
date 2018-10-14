export const fruitMixin = {
    data(){
        return{
            fruits:['Apple','Mango','Pear','Melon','Banana'],
            filterText:''
        }
    },
    computed:{
        filteredFruits(){
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            })
        }
    }
}