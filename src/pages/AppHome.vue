<script>
export default {
    name: 'Home'
}
</script>
<template lang="">
    <div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-12 text-center ">
                    <h1>Bool-Project</h1>
                    <h3 class="mb-5">Visualizziamo i progetti svolti in Boolean</h3>
                    <router-link class="text-decoration-none color" :to="{ name: 'blog'}"><button class="bottone">{{'Blog'}}</button></router-link>
                    <!-- <img src="" alt=""> -->
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/generals.scss" as *;

.bottone {
    padding: 12px 20px;
    background-color: orange;
    border: 1px solid orange;
    border-radius: 10px;

    &:hover {
        background-color: white;
        color: orange;
        border: 2px solid orange;
    }
}
</style>