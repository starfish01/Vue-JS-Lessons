<template>
    <div>
        <h3>Edit the User</h3>
        <p>Local: {{ $route.query.local }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
        <hr>
        <button>Confirm</button>
        <div style="height: 700px"></div>
        <p id="data">Some Extra Data</p>
    </div>
</template>