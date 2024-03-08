<script>
import AppContactForm from '../components/AppContactForm.vue';

export default {
    name: 'AppContactUs',
}
</script>
<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>Contatti</h1>
                </div>
                <div class="col-6">
                    <h5>Città:</h5>
                    <span>Cagliari (CA)</span>
                    <h5>Indirizzo:</h5>
                    <span>Viale Marconi 34</span>

                </div>
                <div class="col-6">
                    <h5>Email:</h5>
                    <span>pincopallino@gmail.com</span>
                    <h5>Telefono:</h5>
                    <span>+39 329123456789</span>  
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