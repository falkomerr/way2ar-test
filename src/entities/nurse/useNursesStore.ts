import { defineStore } from 'pinia';
import type { NurseType } from '@/shared/types/types.ts';

interface NursesState {
    nurses: NurseType[];
}

export const useNursesStore = defineStore('nurses', {
    state: (): NursesState => ({
        nurses: [],
    }),
    actions: {
        loadMockData(mockData: any) {
            this.nurses = mockData.nurses;
        },
        deleteNurse(id: number) {
            this.nurses = this.nurses.filter((nurse) => nurse.id !== id);
        },
        addNurse(fullName: string, department: string) {
            this.nurses.push({
                id: this.nurses.length + 1,
                name: fullName,
                department,
            });
        },
        updateNurse(
            fullName: string,
            department: string,
            selectedNurseId: number
        ) {
            const index = this.nurses.findIndex(
                (nurse) => nurse.id === selectedNurseId
            );
            if (index !== -1) {
                this.nurses[index] = {
                    ...this.nurses[index],
                    name: fullName,
                    department: department,
                };
            }
        },
    },
    getters: {
        getNurses: (state) => state.nurses,
    },
});
