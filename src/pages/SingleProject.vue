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
        },
        getUrlImage() {
            let image;
            if (this.project.cover_immagine != null) {
                image = '/storage/' + this.project.cover_immagine;
            }
            else {
                image = '/img/immagine.png';
            }
            return `${this.store.baseUrl}${image}`;
        }
    },
}
</script>
<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 my-3">
                    <h1>{{ project.nome_progetto}}</h1>
                </div>
                <div class="col-6">
                    <img class=" w-100 " :src="getUrlImage()" :alt="project.nome_progetto">
                </div>
                <div class="col-6 mt-5">
                    <p class="card-text">{{ project.descrizione }}</p>
                    <span>Tipo: {{project.type ? project.type.name : 'Senza tipo'}}</span>
                    <br>
                    <span>Data: {{ project.data }}</span>
                </div>
            </div>
        </div>
    </div> 
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/generals.scss" as *;

</style>