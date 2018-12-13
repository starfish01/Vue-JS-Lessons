<template>
    <v-container grid-list-md  >
        <v-layout wrap >
             <v-flex xs3 >
                <v-checkbox  v-model="requirements.form" @change="fn()" label="Form" ></v-checkbox>
            </v-flex>
            <v-flex xs4 >
                <v-checkbox  v-model="requirements.visability" @change="fn()" v-if="schoolboxPermissionsAllowed" label="Schoolbox Visability" ></v-checkbox>
            </v-flex>
            <v-flex xs4 >
                <v-autocomplete
                @change="fn()"
                    v-if="requirements.visability"
                    v-model="visabilityRoles"
                    :items="['Parent', 'Student', 'Staff']"
                    label="Permission To View"
                    multiple
                ></v-autocomplete>
            </v-flex>
            <v-flex xs12 >
                    <v-checkbox v-model="requirements.details" @change="fn()" label="Display Contact Details"></v-checkbox>
                </v-flex>

            <v-flex xs3 >
                    <v-checkbox v-if="requirements.details" v-model="requirements.phone" @change="fn()" label="Phone No."></v-checkbox>
                </v-flex>
            <v-flex xs12 sm5 >
                <v-text-field v-if="requirements.phone" label="Title" @change="fn()" ></v-text-field>
            </v-flex>
            <v-flex xs12 sm4 >
                <v-text-field v-if="requirements.phone" label="Absentee Phone Number"  @change="fn()"></v-text-field>
            </v-flex>
            <v-flex xs3 >
                    <v-checkbox v-if="requirements.details" v-model="requirements.email" @change="fn()" label="Email" ></v-checkbox>
                </v-flex>
            <v-flex xs12 sm5 >
                <v-text-field label="Title"  v-if="requirements.email" @change="fn()"></v-text-field>
            </v-flex>
            <v-flex xs12 sm4 >
                <v-text-field v-model="emailInput" @change="fn()" v-if="requirements.email" label="Email"  ></v-text-field>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            requirements:{phone:false, email: false, form: false, visability:false, form:false, details:false},
            emailInput:'',
            visabilityRoles:[],
            sickReasonsList: "[ {'value': 5,'title': 'Sick' },{'value': 6,'title': 'Contagious or infectious condition'},{'value': 2,'title': 'Medical appointment'},{'value': 3,'title': 'Religious holiday'},{'value': 4,'title': 'Exceptional or urgent family circumstance'},{'value': 100,'title': 'Other - please provide details below'} ]"
        
        }
    },
    methods: {
        fn(){
            let exportJSON = {
                "form":{
                    "show":this.requirements.form
                }
            }
            if(this.requirements.form){
                exportJSON.reasons = this.sickReasonsSelected()
            }
            if(this.requirements.visability){
                exportJSON.visability = {
                    "default_hidden":true,
                    "visible_role_types": this.visabilityRoles
                }
            }

            // console.log(exportJSON)


            this.$emit('sectionButtonData', exportJSON)
        },
        sickReasonsSelected(){
            return this.sickReasonsList
        }
    },
    computed:{

    },
    props: {
    'schoolboxPermissionsAllowed':Boolean
  },
}
</script>


<style>

</style>
