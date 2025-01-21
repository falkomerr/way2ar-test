<script setup lang="ts">
    import Container from '@/shared/ui/Container.vue';
    import Table from '@/shared/ui/Table/Table.vue';
    import { storeToRefs } from 'pinia';
    import TableAddForm from '@/shared/ui/Table/TableAddForm.vue';
    import { ref, type Ref } from 'vue';
    import TableEditForm from '@/shared/ui/Table/TableEditForm.vue';
    import { useDoctorsStore } from '@/entities/doctor/useDoctorsStore.ts';

    type selectedItemType = {
        name: string;
        department: string;
        id: number;
    };

    const doctorsStore = useDoctorsStore();
    const isFormVisible: Ref<boolean> = ref(false);

    const { doctors } = storeToRefs(doctorsStore);
    const selectedDoctor: Ref<selectedItemType | null> = ref(null);

    const removeDoctor = (id: number) => {
        doctorsStore.deleteDoctor(id);
    };

    const addDoctor = (data: { fullName: string; department: string }) => {
        doctorsStore.addDoctor(data.fullName, data.department);
    };

    const editDoctor = (id: number) => {
        const doctor = doctors.value.find((doctor) => doctor.id === id);
        if (doctor) {
            selectedDoctor.value = { ...doctor };
        }
    };

    const editFormSubmit = (data: { fullName: string; department: string }) => {
        if (selectedDoctor.value) {
            doctorsStore.updateDoctor(
                data.fullName,
                data.department,
                selectedDoctor.value.id
            );
            selectedDoctor.value = null;
        }
    };

    const toggleFormVisibility = () => {
        isFormVisible.value = !isFormVisible.value;
    };
</script>

<template>
    <Container>
        <h1>Врачи</h1>
        <Table
            doctor-type="doctor"
            :tableData="doctors"
            @delete-item="removeDoctor($event)"
            @update-item="editDoctor($event)"
        />
        <Button
            v-if="!isFormVisible"
            :type="'button'"
            @click="toggleFormVisibility"
            >Добавить врача</Button
        >
        <TableAddForm
            v-else
            @close="toggleFormVisibility"
            @submit="addDoctor"
        />

        <TableEditForm
            v-if="selectedDoctor"
            :initial-data="selectedDoctor"
            @submit="editFormSubmit"
            @close="selectedDoctor = null"
            @close-by-click="selectedDoctor = null"
        />
    </Container>
</template>
