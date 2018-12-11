<template>
    <v-container grid-list-md  >
        <v-layout wrap >
            <v-flex xs2 >
                    <v-checkbox label="Phone No."></v-checkbox>
                </v-flex>
            <v-flex xs12 sm5 >
                <v-text-field label="Title" required ></v-text-field>
            </v-flex>
            <v-flex xs12 sm5 >
                <v-text-field label="Absentee Phone Number" required ></v-text-field>
            </v-flex>
            <v-flex xs2 >
                    <v-checkbox label="Email"></v-checkbox>
                </v-flex>
            <v-flex xs12 sm5 >
                <v-text-field label="Title" required ></v-text-field>
            </v-flex>
            <v-flex xs12 sm5 >
                <v-text-field label="Email" required ></v-text-field>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            sickReasonsList: "[ {'value': 5,'title': 'Sick' },{'value': 6,'title': 'Contagious or infectious condition'},{'value': 2,'title': 'Medical appointment'},{'value': 3,'title': 'Religious holiday'},{'value': 4,'title': 'Exceptional or urgent family circumstance'},{'value': 100,'title': 'Other - please provide details below'} ]"
        }
    },
    methods: {
        
    }
}
</script>


<style>

</style>
