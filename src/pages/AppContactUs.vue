<script>
import AppContactForm from '../components/AppContactForm.vue';

export default {
    name: 'AppContactUs',
    components: {
        AppContactForm,
    }
}
</script>
<template lang="">
    <div>
        <div class="container">
            <div class="row mb-5">
                <div class="col-12 my-4">
                    <h1>Contatti</h1>
                </div>
                <div class="col-6">
                    <span><strong>Città:</strong> Cagliari (CA)</span>
                    <br>
                    <span><strong>Indirizzo:</strong> Viale Marconi 34</span>
                </div>
                <div class="col-6">
                    <span><strong>Email:</strong> pincopallino@gmail.com</span>
                    <br>
                    <span><strong>Telefono: </strong>+39 329123456789</span>  
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <AppContactForm/>
    </div>
</template>
<style lang="">
    
</style>