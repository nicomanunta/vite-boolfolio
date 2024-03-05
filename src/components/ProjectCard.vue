<script>
import { store } from "../store.js";

export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {
            store,
        }
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
        }
    },


}
</script>
<template lang="">
    <div class="col-3 mt-4 ">
        <router-link class="text-decoration-none " :to="{ name: 'single-project', params: { slug: project.slug }}">
            <div class="card d-flex" style="width: 18rem;">
                <img :src="getUrlImage()">
                <div class="card-body">
                    <h5 class="card-title">{{ project.nome_progetto ? project.nome_progetto : 'Nome Progetto non disponibile' }}</h5>
                    <p class="card-text">{{ project.descrizione }}</p>
                    <span>Tipo: {{project.type ? project.type.name : 'Senza tipo'}}</span>
                    <br>
                    <span>Data: {{ project.data }}</span>
                    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                </div>
            </div>
        </router-link>
    </div>

</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/generals.scss" as *;
    
</style>