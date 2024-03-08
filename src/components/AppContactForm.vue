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
                    <label for="name" class="control-label mb-2">Nome</label>
                    <input type="text" placeholder="Nome" id="name" name="name" class="form-control" v-model="name">
                </div>
                <div class="col-6">
                    <label for="surname" class="control-label mb-2">Cognome</label>
                    <input type="text" placeholder="Cognome" id="surname" name="surname" class="form-control" v-model="surname">
                </div>
                <div class="col-6 mt-4">
                    <label for="email" class="control-label mb-2">Email</label>
                    <input type="email" placeholder="Email" id="email" name="email" class="form-control" v-model="email">
                </div>
                <div class="col-6 mt-4">
                    <label for="phone" class="control-label mb-2">Telefono</label>
                    <input type="text" placeholder="Telefono" id="phone" name="phone" class="form-control" v-model="phone">
                </div>
                <div class="col-12 mt-4">
                    <label for="message" class="control-label mb-2">Messaggio</label>
                    <textarea name="message" id="message" cols="30" rows="10" v-model="message" class="form-control"></textarea>
                </div>
                <div class="my-3 text-end">
                    <button class="btn  btn-success" type="submit">Invia</button>
                </div>
            </div>
        </form>
    </div>
</template>
<style lang="scss" scoped>
    
</style>