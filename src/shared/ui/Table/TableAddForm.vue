<template>
    <form
        @submit.prevent="handleSubmit"
        class="max-w-[25rem] rounded-lg bg-[#6e6e6e] p-5 text-white"
    >
        <FormGroup>
            <InputText
                id="fullName"
                label="ФИО:"
                v-model="formData.fullName"
                required
                class="w-full rounded border border-[#777] bg-[#333] p-2.5 text-base text-white placeholder:text-[#888]"
            />
        </FormGroup>

        <FormGroup>
            <RadioGroup
                legend="Отделение:"
                :options="DEPARTMENTS_RADIO_LIST"
                v-model="formData.department"
                required
                class="flex gap-5 accent-[#ff7100]"
            />
        </FormGroup>

        <Button
            class="mb-5 w-full cursor-pointer rounded border-none bg-[#ff7100] p-3 text-base text-white transition-colors duration-300 hover:bg-[#ff7100]"
            >Добавить</Button
        >
        <Button :type="'button'" @click="$emit('close')">Закрыть</Button>
    </form>
</template>

<script setup lang="ts">
    import { type Ref, ref } from 'vue';
    import Button from '@/shared/ui/Button.vue';
    import FormGroup from '@/shared/ui/FormGroup.vue';
    import InputText from '@/shared/ui/InputText.vue';
    import RadioGroup from '@/shared/ui/RadioGroup.vue';
    import { useConstants } from '@/shared/composables/useConstants.ts';

    const { DEPARTMENTS_RADIO_LIST } = useConstants();

    interface formData {
        fullName: string;
        department: string;
    }

    const formData: Ref<formData> = ref({
        fullName: '',
        department: 'Кардиология',
    });

    const handleSubmit = () => {
        emit('submit', {
            fullName: formData.value.fullName,
            department: formData.value.department,
        });

        formData.value.fullName = '';
        formData.value.department = '';
    };

    const emit = defineEmits<{
        (event: 'submit', data: { fullName: string; department: string }): void;
        (event: 'close'): void;
    }>();
</script>
