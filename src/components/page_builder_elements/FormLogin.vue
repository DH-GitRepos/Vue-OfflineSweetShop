<script setup>
import TextBlock from '../page_builder_elements/TextBlock.vue';
import SubHeading from '../page_builder_elements/SubHeading.vue';
import SubHeading2 from '../page_builder_elements/SubHeading2.vue';
import { ref, onMounted, computed } from "vue";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

let loggedIn = ref(false);
let email = ref("");
let password = ref("");
let router = useRouter();
let errMsg = ref("");
let auth = getAuth();

onMounted(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            loggedIn.value = true;
        } else {
            loggedIn.value = false;
        }
    });
});
    
let authenticated = computed(() => {
    return loggedIn.value;
});

function logIn() {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("Logged in");
            router.push("/profile");
        })
        .catch((error) => {
        console.log(error.code);

            switch (error.code) {
                case "auth/invalid-email":
                errMsg.value = "Invalid Email";
                break;
            case "auth/user-not-found":
                errMsg.value = "No account with that email found";
                break;
            case "auth/wrong-password":
                errMsg.value = "Password incorrect";
                break;
            default:
                errMsg.value = "Email or password was incorrect";
                break;
            }
        });
}

let doRegister = () => {
    router.push("/register");
}

function logOut() {
    signOut(auth).then(() => {
        loggedIn.value = false;
        email.value = "";
        password.value = "";
        router.push("/");
    });
}

</script>

<template>

    <section id="loginSection" v-if="!authenticated">  
        
        <article class="text-left mb-[5vh]">
            <SubHeading headingText="Log in to your account." />
        </article>
        
        <article class="text-left">
            
            <div class="mb-[15px]">
                <label for="myEmail" class="text-textNormal text-sm font-bold mb-2">Email</label>    
                <input 
                    aria-label="email"
                    type="email" 
                    v-model="email"
                    id="myEmail" 
                    name="myEmail" 
                    required
                    class="myEmail appearance-none border-[2px] border-primary bg-primarySoft rounded w-full py-1 px-2 text-textNormal leading-tight" 
                    />
            </div>   

            <div class=""> 
                <label for="myPassword" class="block textc text-sm font-bold mb-2">Password</label>   
                <input
                    aria-label="password"
                    type="password" 
                    v-model="password"
                    id="myPassword"
                    name="myPassword" 
                    required
                    class="myPassword appearance-none border-[2px] border-primary bg-primarySoft rounded w-full py-1 px-2 text-textNormal leading-tight" 
                    />
            </div>   

            <button @click="logIn" class="mt-5 p-1 border-solid border-2 rounded border-buttonBorder bg-buttonBg text-rg" aria-label="login button">Login</button>    
            <p v-if="errMsg" class="pt-[1rem] text-textNormal">{{ errMsg }}</p>  
              
        </article>
        
        <article id="goToRegister" class="flex w-[85vw] md:w-[40vw] mb-[7vh] items-left justify-left flex-col bg-light font-regular">
        
            <article class="text-left mb-[15px]">
                <SubHeading headingText="Don't have an account?" />
            </article>
            
            <article class="text-left">
                <button @click="doRegister" class="p-1 border-solid border-2 rounded border-buttonBorder bg-buttonBg text-rg">Create account</button>
            </article>
    
        </article>        

    </section>    
    
    <section id="loginSection" v-if="authenticated" class="flex flex-col bg-light font-regular">  
        
        <article class="text-left">
        
            <div> 
                <SubHeading2 headingText="You are currently logged in" />
            </div>
            
            <div> 
                <TextBlock textContent="You are currently logged in." />
            </div>

            <div class="mb-[5vh]">
                <button @click="logOut" class="myLogout p-1 border-solid border-2 rounded border-buttonBorder bg-buttonBg text-rg">Logout</button>    
            </div>

        </article>

    </section>
       
</template>