<template>
<div class="row quoteArea">
    <div class="col-xs-4"></div>
    <div class="col-xs-4">
        <h3>Quote</h3>
        <textarea v-model="quote" rows="4" cols="50"></textarea>
        <button class="btn btn-primary" @click="addQuote">Add Quote</button>
    </div>  
</div>
</template>
<script>
export default {
    // props:['quotes','maxQuotes'],
    data: function(){
      return{
          quote:''
      }  
    },
    methods:{
        addQuote(){



            if(this.quote.trim().length == 0){
                alert('A quote must have some text');
                return
            }

            this.$emit('quoteAdded', this.quote);
            
            // this.quotes.push(this.quote);
            this.quote = '';
        }
    }
    
}
</script>
<style scoped>
.quoteArea{
    padding-bottom: 50px;
}
.btn.btn-primary{
    display: block;
    margin: 0 auto;
}
    
</style>
