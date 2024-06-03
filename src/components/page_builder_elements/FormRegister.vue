<script setup>
import SubHeading from '../page_builder_elements/SubHeading.vue';
import { ref } from "vue";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { useRouter } from "vue-router";

let password = ref("");
let email = ref("");
let router = useRouter();

function register() {
    console.log("register");
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then(
        (data) => {
            console.log("Logged in");
            router.push('/');
        })
        .catch((error) => {
            console.log(error.code);
            alert("Sorry you could not sign up" + error.message);
        }
    );
}
</script>

<template>

    <article class="text-left mb-[5vh]">
        <SubHeading headingText="Create an account." />
    </article>

    <article id="loginDetails" class="flex flex-col bg-light font-regular">

        <div class="mb-[15px]">
            <label for="myEmail" class="text-textNormal text-sm font-bold mb-2">Email</label>    
            <input 
                type="email" 
                v-model="email"
                id="myEmail"
                name="myEmail"
                required 
                class="myEmail appearance-none border-[2px] border-primary bg-primarySoft rounded w-full py-1 px-2 text-textNormal leading-tight"
                />
        </div>   

        <div class=""> 
            <label for="myPassword" class="block text-textNormal text-sm font-bold mb-2">Password</label>   
            <input 
                type="password" 
                v-model="password"
                id="myPassword" 
                name="myPassword"
                required
                class="myPassword appearance-none border-[2px] border-primary bg-primarySoft rounded w-full py-1 px-2 text-textNormal leading-tight" 
                 />
        </div>
    
        <div>
            <button @click="register" class="myLogout mt-5 p-1 border-solid border-2 rounded border-buttonBorder bg-buttonBg text-rg">Register</button>
        </div>
    
    </article>

</template>