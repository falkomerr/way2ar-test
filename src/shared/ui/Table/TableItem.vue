<script setup lang="ts">
    import type { DoctorType, NurseType } from '@/shared/types/types.ts';

    interface TableItemProps {
        tableItem: DoctorType | NurseType;
        doctorType: 'nurse' | 'doctor';
        index: number;
    }

    withDefaults(defineProps<TableItemProps>(), {
        index: 0,
    });

    defineEmits<{
        delete: [id: number];
        update: [id: number];
    }>();
</script>

<template>
    <tr>
        <td
            class="color-[#F8F8F8] w-[4.375rem] border border-[#EBEBEB] bg-transparent p-2.5 text-center text-base font-medium"
        >
            {{ index + 1 }}
        </td>
        <td
            class="color-[#F8F8F8] border border-[#EBEBEB] bg-transparent p-2.5 text-base font-medium"
        >
            {{ tableItem.name }}
            <span
                v-if="
                    doctorType === 'doctor' &&
                    (tableItem as DoctorType).isManager
                "
                >(Заведующий)</span
            >
        </td>
        <td
            class="color-[#F8F8F8] border border-[#EBEBEB] bg-transparent p-2.5 text-base font-medium"
        >
            {{ tableItem.department }}
        </td>
        <td
            class="color-[#F8F8F8] flex w-[5rem] cursor-pointer justify-between gap-2.5 border border-[#EBEBEB] bg-transparent p-2.5 text-center text-base font-medium"
        >
            <img
                src="../../assets/icons/trash-icon.svg"
                alt="trash-icon"
                class="delete-icon"
                @click="$emit('delete', tableItem.id)"
            />
            <img
                src="../../assets/icons/edit-icon.svg"
                alt="edit-icon"
                @click="$emit('update', tableItem.id)"
            />
        </td>
    </tr>
</template>
