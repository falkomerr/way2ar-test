<template>
    <form
        @submit.prevent="handleSubmit"
        class="[font-family: Arial, sans-serif] fixed top-1/2 mx-auto w-[calc(100%-1rem)] max-w-[25rem] -translate-y-1/2 rounded-lg bg-[#6e6e6e] p-5 text-white"
    >
        <FormGroup>
            <InputText
                id="fullName"
                label="ФИО:"
                v-model="formData.fullName"
                required
                class="w-full rounded border border-[#777] bg-[build] p-2.5 text-base text-white placeholder:text-[#888]"
            />
        </FormGroup>

        <FormGroup>
            <RadioGroup
                class="flex gap-5 accent-[#ff7100]"
                legend="Отделение:"
                :options="DEPARTMENTS_RADIO_LIST"
                v-model="formData.department"
                required
            />
        </FormGroup>

        <Button
            class="mb-5 w-full cursor-pointer rounded border-none bg-[#ff7100] p-3 text-base text-white transition-colors duration-300 hover:bg-[#ff7100]"
            >Сохранить</Button
        >
        <Button type="button" @click="$emit('close-by-click')">Закрыть</Button>
    </form>
</template>

<script setup lang="ts">
    import { onMounted, ref, watch } from 'vue';
    import FormGroup from '@/shared/ui/FormGroup.vue';
    import InputText from '@/shared/ui/InputText.vue';
    import Button from '@/shared/ui/Button.vue';
    import RadioGroup from '@/shared/ui/RadioGroup.vue';
    import { useConstants } from '@/shared/composables/useConstants.ts';

    const { DEPARTMENTS_RADIO_LIST } = useConstants();

    // Определяем событие, которое будет отправлять данные формы
    const emit = defineEmits<{
        (event: 'submit', data: { fullName: string; department: string }): void;
        (event: 'close-by-click'): void;
    }>();

    // Пропсы для передачи данных элемента
    const props = defineProps<{
        initialData: {
            name: string;
            department: string;
        };
    }>();

    const formData = ref({
        fullName: props.initialData.name,
        department: props.initialData.department,
    });

    watch(
        () => props.initialData,
        (newData) => {
            formData.value.fullName = newData.name;
            formData.value.department = newData.department;
        },
        { deep: true }
    );

    onMounted(() => {
        formData.value.department = props.initialData.department;
        formData.value.fullName = props.initialData.name;
    });

    const handleSubmit = () => {
        emit('submit', {
            fullName: formData.value.fullName,
            department: formData.value.department,
        });
    };
</script>
