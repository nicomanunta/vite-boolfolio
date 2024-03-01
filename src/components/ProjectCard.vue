<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },



}
</script>
<template lang="">
    <div class="col-12">
        <div class="card" style="width: 18rem;">
            <!-- <img :src="`${this.store.baseUrl}/storage/${project.cover_immagine}`" class="card-img-top" alt=""> -->
            <div class="card-body">
                <h5 class="card-title">{{ project.nome_progetto ? project.nome_progetto : 'Nome Progetto non disponibile' }}</h5>
                <!-- <p class="card-text">{{ project.descrizione }}</p>
                <span>{{project.type ? $project.type.name : 'Senza tipo'}}</span>
                <br>
                <span>Data: {{ project.data }}</span> -->
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>