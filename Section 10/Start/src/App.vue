<template>
    <div class="container">
        <app-quotes-header :quotes="quotes"></app-quotes-header>
        <app-quote-add @quoteAdded="addQuote($event)"></app-quote-add>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote($event)"></app-quote-grid>
        <app-footer></app-footer>
    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'
import QuotesHeader from './components/QuotesHeader.vue'
import QuotesAdd from './components/QuoteAdd.vue'
import Footer from './components/Footer.vue'

    export default {
        data:function(){
            return{
                quotes:[
                    'just a Quote to see something',
                    'and another saying'
                ],
                maxQuotes:10
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appQuotesHeader: QuotesHeader,
            appQuoteAdd: QuotesAdd,
            appFooter: Footer
        },
        methods: {
            addQuote(data) {
                if(this.quotes.length == this.maxQuotes){
                    alert('You will need to delete quotes before adding more');
                    return
                }
                this.quotes.push(data)
            },
            deleteQuote(data){
                this.quotes.splice(data, 1)
            }

        }
    }
</script>

<style>
</style>
