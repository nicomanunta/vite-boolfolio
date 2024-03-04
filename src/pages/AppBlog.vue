<script>
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';
import { store } from "../store.js";

export default {
    name: 'AppBlog',
    components: {
        ProjectCard

    },
    data() {
        return {
            store,
            projects: [],
            currentPage: 1,
            lastPage: null,

        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects(page_number) {
            axios.get(`${this.store.baseUrl}/api/projects`, {
                params: {
                    page: page_number,
                }
            }).then((response) => {
                this.projects = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
            })

        }
    },
}
</script>

<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 my-4 text-center ">
                    <h1>Elenco Progetti</h1>
                </div>
            </div>
            <div class="row">
                <ProjectCard v-for="project, index in projects" :key="index" :project="project"/>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="div d-flex justify-content-center my-4">
                        <ul class="pagination">
                            <li class="me-1">
                                <button :class="currentPage == 1 ? 'd-none' : '' " class="bottone" @click="getProjects(currentPage - 1)">Precedente</button>
                            </li>
                            <li class="me-1">
                                <button :class="currentPage == lastPage ? 'd-none' : '' " class="bottone" @click="getProjects(currentPage + 1)">Successiva</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@use "../styles/partials/variables" as *;
@use "../styles/generals.scss" as *;

.bottone {
    padding: 12px 20px;
    background-color: orange;
    border: 2px solid orange;
    border-radius: 10px;

    &:hover {
        background-color: white;
        color: orange;
        border: 2px solid orange;
    }
}
</style>