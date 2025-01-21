<script setup lang="ts">
    import Container from '@/shared/ui/Container.vue';
    import Table from '@/shared/ui/Table/Table.vue';
    import { storeToRefs } from 'pinia';
    import TableAddForm from '@/shared/ui/Table/TableAddForm.vue';
    import { ref, type Ref } from 'vue';
    import TableEditForm from '@/shared/ui/Table/TableEditForm.vue';
    import { useNursesStore } from '@/entities/nurse/useNursesStore.ts';

    type selectedItemType = {
        name: string;
        department: string;
        id: number;
    };

    const nursesStore = useNursesStore();
    const { nurses } = storeToRefs(nursesStore);

    const isFormVisible: Ref<boolean> = ref(false);
    const selectedNurse: Ref<selectedItemType | null> = ref(null);

    const removeNurse = (id: number) => {
        nursesStore.deleteNurse(id);
    };

    const addNurse = (data: { fullName: string; department: string }) => {
        nursesStore.addNurse(data.fullName, data.department);
    };

    const editNurse = (id: number) => {
        const nurse = nurses.value.find((nurse) => nurse.id === id);
        if (nurse) {
            selectedNurse.value = { ...nurse };
        }
    };

    const editFormSubmit = (data: { fullName: string; department: string }) => {
        if (selectedNurse.value) {
            nursesStore.updateNurse(
                data.fullName,
                data.department,
                selectedNurse.value.id
            );
            selectedNurse.value = null;
        }
    };

    const toggleFormVisibility = () => {
        isFormVisible.value = !isFormVisible.value;
    };
</script>

<template>
    <Container>
        <h1>Медсестры</h1>
        <Table
            doctor-type="nurse"
            :tableData="nurses"
            @delete-item="removeNurse($event)"
            @update-item="editNurse($event)"
        />
        <Button
            v-if="!isFormVisible"
            :type="'button'"
            @click="toggleFormVisibility"
            >Добавить медсестру</Button
        >
        <TableAddForm v-else @close="toggleFormVisibility" @submit="addNurse" />

        <TableEditForm
            v-if="selectedNurse"
            :initial-data="selectedNurse"
            @submit="editFormSubmit"
            @close="selectedNurse = null"
            @close-by-click="selectedNurse = null"
        />
    </Container>
</template>
