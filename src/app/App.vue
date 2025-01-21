<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import { useDoctorsStore } from '../entities/doctor/useDoctorsStore.ts';
    import { onMounted } from 'vue';
    import Header from '@/widgets/Header.vue';
    import { useNursesStore } from '@/entities/nurse/useNursesStore.ts';
    import mockData from '@/shared/mock/mockData.json';

    const doctorsStore = useDoctorsStore();
    const nursesStore = useNursesStore();

    onMounted(() => {
        doctorsStore.loadMockData(mockData);
        nursesStore.loadMockData(mockData);
    });
</script>

<template>
    <div class="page-content">
        <Header />
        <main>
            <RouterView />
        </main>
    </div>
</template>
