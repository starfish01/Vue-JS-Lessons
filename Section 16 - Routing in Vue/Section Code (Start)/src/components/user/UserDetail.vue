<template>
    <div>
        <h3>Some User Details</h3>
        <p>User Loaded has ID: {{ $route.params.id }}</p>
        <router-link 
        tag="button" 
        :to="{ name:'userEdit', params:{ id:$route.params.id }, query:{ local:'en', q:200 }, hash:'#data' }"
        >Edit User</router-link>
    </div>
</template>

<script>
export default {
    beforeRouteEnter (to, from, next) {
        console.log('inside route file')
        if(true){
            next();
        }else{
            next(false);
        }
    }
}
</script>

