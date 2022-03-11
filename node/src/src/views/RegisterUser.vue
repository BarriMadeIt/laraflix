<template>
    <div class="d-flex justify-content-center mt-4">
        <form @submit.prevent="register" class="md:w-50 card p-4">
            <h1 class="h2 text-secondary">Create an account</h1>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input v-model="name" type="text" class="form-control" id="name" placeholder="John Doe">
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="email" type="email" class="form-control" id="email" placeholder="johndoe@example.com">
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="password" placeholder="">
            </div>

            <div class="mb-3">
                <label for="password_confirmation" class="form-label">Confirm password</label>
                <input v-model="password_confirmation" type="password" class="form-control" id="password_confirmation" placeholder="">
            </div>

            <div>
                <button type="submit" class="btn btn-primary">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
    },
    methods: {
        register(){
            this.$store.dispatch('register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            })
            .then(() => {
                this.$router.push({ name: 'AdminDashboard' })
            })
        }
    }
}
</script>

<style lang="">
    
</style>