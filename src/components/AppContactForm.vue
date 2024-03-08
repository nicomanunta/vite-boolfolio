<script>
import axios from 'axios';
import { store } from "../store.js";
import { Alert } from 'bootstrap';

export default {
    name: 'AppContactForm',
    data() {
        return {
            store,
            name: '',
            surname: '',
            email: '', 
            phone: '',
            message: '',
        }
    },
    methods: {
        sendForm(){
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                message: this.message,
                
            }
             axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response)=>{
                console.log(response);
                if(response.data.success){
                    this.$router.push({ name: 'home' });
                }
                else{
                    alert('Email non inviata');
                }
             })
        }
    },
}
</script>
<template lang="">
    <div>
        <form @submit.prevent="sendForm()" method="POST">
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