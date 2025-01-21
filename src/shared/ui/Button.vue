<template>
    <button
        @click="$emit('click')"
        :type="type"
        :class="
            cn(
                'w-full max-w-[25rem] cursor-pointer rounded-lg border border-[#F8F8F8] bg-[#0F1B27] py-2.5 text-lg text-[#F8F8F8]',
                $props.class
            )
        "
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
    import { cn } from '@/shared/ui/utils.ts';

    defineProps<{
        class?: string;
        type?: 'button' | 'submit' | 'reset';
    }>();

    defineEmits<{
        click: [];
    }>();
</script>
