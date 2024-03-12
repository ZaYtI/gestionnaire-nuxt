<script setup>
import { useAuthStore } from '~/stores/auth';


const error = ref(false)
const email = ref('');
const password = ref('');


const store = useAuthStore()

const router = useRouter()

const submitForm = async (event) => {
    event.preventDefault();
    let emailValue = email.value
    let passwordValue = password.value
    const data = ({"username":emailValue,"password":passwordValue})
    const response = await fetch('http://localhost:8083/authentication_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    const jsonResponse = await response.json()
    if(response.status!==200){
        error.value = true
        email.value = ''
        password.value = ''
    }else{
        let token = jsonResponse.token
        if(token== null || token == undefined){
            error.value = true
            email.value = ''
            password.value = ''
        }
        localStorage.setItem('sae-token',jsonResponse.token)
        if(store.getToken == null || store.getToken == undefined){
            store.setToken(token)
        }
        store.setIsLoggedIn(true)
        router.push('/')
    }
}

</script>


<template>
    <div class="card">
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                <div class="d-flex justify-content-center" :class="{'d-none':!error}">
                    <small class="text-danger mx-auto">Erreur lors de la connexion</small>
                </div>  
            </div>
            <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary">Submit</button>   
            </div>
        </form>
    </div>
</template>

<style scoped>
.card{
    padding:4rem;
}
</style>