<template>
    <div class="container">
        <form v-if="!hasBeenSubmitted">
             <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-full-name v-model="userData.fullName" ></app-full-name>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input
                                type="text"
                                id="firstName"
                                class="form-control"
                                v-model="userData.firstName">
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input
                                type="text"
                                id="lastName"
                                class="form-control"
                                v-model="userData.lastName">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model="userData.password">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label>Store Data?</label><br>
                    <label for="yes">
                        <input
                                type="radio"
                                id="yesSaveData"
                                value=true
                                v-model="userData.storeData"> Yes
                    </label>
                    <label for="no">
                        <input
                                type="radio"
                                id="noSaveData"
                                value=false
                                v-model="userData.storeData"> No
                    </label>


                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
             <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <button class="btn btn-primary"
                    :disabled=!allFieldsComplete
                    @click.prevent="submitted">Submit</button>
                </div>
             </div>
        </form>
        <!-- <hr> -->
        <div class="row" v-else>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{userData.firstName}} {{userData.lastName}}</p>
                        <p>Full Name using: {{userData.fullName}}</p>
                        <p>Mail:  {{userData.email}}</p>
                        <p>Password:  {{userData.password}}</p>
                        <p>Store in Database?:  {{ userData.storeData == "true" ? 'Yes' : 'No' }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from './CustomFullNameField.vue'
    export default {
        data(){
            return{
                userData:{
                    firstName:'',
                    lastName:'',
                    email:'',
                    password:'',
                    storeData: null,
                    fullName:'------'
                },
                hasBeenSubmitted:false
            }
        },
        methods:{
            submitted() {
                if(
                    this.userData.firstName.trim().length &&
                    this.userData.email.trim().length &&
                    this.userData.lastName.trim().length &&
                    this.userData.password.trim().length 
                ){
                    this.hasBeenSubmitted = true
                }
                
            }
        },
        computed:{
            allFieldsComplete(){
                if(
                    this.userData.firstName.trim().length &&
                    this.userData.email.trim().length &&
                    this.userData.lastName.trim().length &&
                    this.userData.password.trim().length 
                ){
                    return true
                }else{
                   return false
                }
            }
        },
        components:{
            appFullName: FullName
        }

    }
</script>

<style>

.container{
    padding-top: 30px;
}
</style>
