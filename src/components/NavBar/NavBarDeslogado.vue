<template>
    <ul class="navbar-nav mr-auto">
        <li class="nav-item">
        <router-link class="nav-link" :to="{name:'login'}">Login</router-link>
        </li>
        <li class="nav-item">
        <router-link :to="{name:'usuario.novo'}" class="nav-link">
            Registro
        </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name:'NavBarDeslogado'
}
</script>