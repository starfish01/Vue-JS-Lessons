<template>
    <div class="container">
        
        <app-header></app-header>       

        <div class="row">
            <div class="col-xs-12 col-sm-6">
                
                <app-servers></app-servers>
                
            </div>
            <app-server-details></app-server-details>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Servers from './components/Servers.vue'
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import ServerDets from './components/ServerDetails.vue'

    export default{
        components:{
            'app-header': Header,
            'app-footer': Footer,
            'app-server-details': ServerDets,
            'app-servers': Servers
        }
    }


</script>

<style>

</style>
