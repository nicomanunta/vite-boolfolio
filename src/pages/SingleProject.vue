<script>
import { store } from "../store.js";
import axios from 'axios';

export default {
    data() {
        return {
            store,
            project: null,
        }
    },
    created() {
        this.getProjectData();
    },
    methods: {
        getProjectData(){
            axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response)=>{
                this.project =response.data.project;

            })
        }
    },
}
</script>
<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>{{ project.nome_progetto}}</h1>
                </div>
                .col-6
            </div>
        </div>
    </div> 
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/generals.scss" as *;

</style>