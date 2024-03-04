<script>
import { store } from "../store.js";
export default {
    data() {
        return {
            store,
        }
    },
}
</script>
<template lang="">
    <div class="bg-color py-4">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <h1>Bool-Project</h1>
                </div>
                <div class="col-7 d-flex  align-items-center justify-content-end">
                    <nav class="">
                        <ul class="d-flex list-unstyled">
                            <li class="me-4 " v-for="item, index in store.menu" :key="index">
                                <router-link class="text-decoration-none color" :to="{ name: item.name}">{{item.label}}</router-link>
                            </li>
                        </ul>
                    </nav>
                </div>  
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/generals.scss" as *;

.bg-color {
    background-color: orange;

}

.color {
    color: black;
}
</style>