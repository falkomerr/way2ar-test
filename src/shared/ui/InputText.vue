<template>
    <label :for="id" class="mb-2 block font-bold">{{ label }}</label>
    <input
        :type="type"
        :id="id"
        v-model="modelValue"
        :placeholder="placeholder"
        :required="required"
        class="block w-full rounded border border-[#777] bg-[#333] px-2.5 text-base text-white"
    />
</template>

<script setup lang="ts">
    interface Props {
        id: string;
        label: string;
        type?: string;
        placeholder?: string;
        required?: boolean;
    }

    withDefaults(defineProps<Props>(), {
        type: 'text',
        required: false,
    });

    const modelValue = defineModel<string>({
        required: true,
    });
</script>
