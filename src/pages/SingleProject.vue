<script>
import { store } from "../store.js";
import axios from 'axios';

export default {
    data() {
        return {
            store,
            project: null,
            success: null,
        }
    },
    created() {
        this.getProjectData();
    },
    methods: {
        getUrlImage() {
            let image;
            if (this.project.cover_immagine != null) {
                image = '/storage/' + this.project.cover_immagine;
            }
            else {
                image = '/img/immagine.png';
            }
            return `${this.store.baseUrl}${image}`;
        },
        getProjectData(){
            axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response)=>{
                console.log(this.$router);
                if (response.data.success){
                    this.project =response.data.project;
                    this.success =response.data.success;
                    
                }
                else{
                    this.$router.push({ name: 'not-found' });
                }

            });
        },
    },
}
</script>
<template lang="">
    <div>
        <div class="container">
            <div class="row" v-if=" success == true ">
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