<template>
    <header class="mx-auto w-full max-w-[120rem] p-4">
        <nav class="flex w-full gap-4">
            <RouterLink
                class="text-sm leading-tight text-white hover:underline"
                to="/doctors"
                >Врачи</RouterLink
            >
            <RouterLink
                class="text-sm leading-tight text-white hover:underline"
                to="/nurses"
                >Медсестры</RouterLink
            >
        </nav>
    </header>
</template>

<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>
