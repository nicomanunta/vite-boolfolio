<script>
import ProjectCard from './ProjectCard.vue';
import axios from 'axios';
import { store } from "../store.js";

export default {
    name: 'AppMain',
    components: {
        ProjectCard

    },
    data() {
        return {
            store,
            projects: [

            ]
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios.get(`${this.store.baseUrl}/api/projects`).then((response) => {
                this.projects = response.data.results;
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
                    <h1>Elenco Progetti</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />

                    <!-- <ProjectCard v-for="project, index in projects" :key="index" :project="project"/> -->
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss"></style>