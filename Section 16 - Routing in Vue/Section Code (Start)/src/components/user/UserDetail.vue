<template>
    <div>
        <h3>Some User Details</h3>
        <p>User Loaded has ID: {{ $route.params.id }}</p>
        <router-link 
        tag="button" 
        :to="{ name:'userEdit', params:{ id:$route.params.id }, query:{ local:'en', q:200 } }"
        >Edit User</router-link>
    </div>
</template>
