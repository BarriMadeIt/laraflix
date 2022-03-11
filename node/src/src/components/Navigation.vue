<template lang="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a href="#" class="navbar-brand">Laraflix</a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div class="navbar-nav">
                    <router-link :to="{ name: 'AdminDashboard' }" class="nav-item nav-link">Dashboard</router-link>
                    <router-link to="/home" class="nav-item nav-link"></router-link>
                </div>
                
                <div class="navbar-nav">
                    <router-link to="/register" class="nav-item nav-link">Register</router-link>
                    <router-link to="/Login" class="nav-item nav-link">Login</router-link>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Profile</a>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">Inbox</a>
                            <a href="#" class="dropdown-item">Sent</a>
                            <a href="#" class="dropdown-item">Drafts</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>