<template>
    <fieldset class="rounded border border-[#777] p-2.5">
        <legend class="px-1.5 font-bold">{{ legend }}</legend>
        <div class="flex gap-5">
            <label
                class="flex items-center gap-2"
                v-for="option in options"
                :key="option.value"
            >
                <input
                    class="accent-[#ff7100]"
                    type="radio"
                    v-model:="option.value"
                    :checked="modelValue === option.value"
                    :required="required"
                />
                {{ option.label }}
            </label>
        </div>
    </fieldset>
</template>

<script setup lang="ts">
    interface Option {
        value: string;
        label: string;
    }

    interface Props {
        legend: string;
        options: Option[];
        required?: boolean;
    }

    withDefaults(defineProps<Props>(), {
        required: false,
    });

    const modelValue = defineModel<string>({
        required: true,
    });
</script>
