<script>
export default {
    name: 'AppContactForm'
}
</script>
<template lang="">
    <div>
        <form action="sendForm()" method="POST">
            <div class="row">
                <div class="col-6">
                    <label for="name" class="control-label">Nome</label>
                    <input type="text" placeholder="Nome" id="name" name="name" class="form-control" v-model="name">
                </div>
                <div class="col-6">
                    <label for="surname" class="control-label">Cognome</label>
                    <input type="text" placeholder="Cognome" id="surname" name="surname" class="form-control" v-model="surname">
                </div>
                <div class="col-6">
                    <label for="email" class="control-label">Email</label>
                    <input type="email" placeholder="Email" id="email" name="email" class="form-control" v-model="email">
                </div>
                <div class="col-6">
                    <label for="phone" class="control-label">Telefono</label>
                    <input type="text" placeholder="Telefono" id="phone" name="phone" class="form-control" v-model="phone">
                </div>
                <div class="col-6">
                    <label for="message" class="control-label">Messaggio</label>
                    <textarea name="message" id="message" cols="30" rows="10" v-model="message"></textarea>
                </div>
            </div>
        </form>
    </div>
</template>
<style lang="scss" scoped>
    
</style>