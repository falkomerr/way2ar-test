<template>
    <div class="mb-5 w-full overflow-x-auto" role="region" tabindex="0">
        <table
            class="h-full w-full min-w-[62.5rem] table-fixed border-collapse border-spacing-px border border-[#EBEBEB] text-left"
        >
            <thead>
                <tr>
                    <th
                        class="w-[4.375rem] border border-[#EBEBEB] bg-transparent p-2.5 text-center text-xl font-semibold text-[#F8F8F8]"
                    >
                        #
                    </th>
                    <th
                        class="border border-[#EBEBEB] bg-transparent p-2.5 text-xl font-semibold text-[#F8F8F8]"
                    >
                        ФИО
                    </th>
                    <th
                        class="border border-[#EBEBEB] bg-transparent p-2.5 text-xl font-semibold text-[#F8F8F8]"
                    >
                        Отделение
                    </th>
                    <th
                        class="w-[5rem] border border-[#EBEBEB] bg-transparent p-2.5 text-center text-xl font-semibold text-[#F8F8F8]"
                    >
                        <br />
                    </th>
                </tr>
            </thead>
            <tbody>
                <TableItem
                    :doctor-type="doctorType"
                    v-for="(item, index) in props.tableData"
                    :key="index"
                    :index="index"
                    :tableItem="item"
                    @delete="$emit('delete-item', item.id)"
                    @update="$emit('update-item', item.id)"
                />
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
    import type { DoctorType, NurseType } from '@/shared/types/types.ts';
    import TableItem from '@/shared/ui/Table/TableItem.vue';

    interface TableProps {
        tableData: DoctorType[] | NurseType[];
        doctorType: 'doctor' | 'nurse';
    }

    const props = withDefaults(defineProps<TableProps>(), {
        tableData: () => [],
    });

    defineEmits<{
        (event: 'delete-item', id: number): void;
        (event: 'update-item', id: number): void;
    }>();
</script>
