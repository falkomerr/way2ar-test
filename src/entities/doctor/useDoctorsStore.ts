// doctors.store.ts
import { defineStore } from 'pinia';
import type { DoctorType } from '@/shared/types/types.ts';

interface DoctorsState {
    doctors: DoctorType[];
}

export const useDoctorsStore = defineStore('doctors', {
    state: (): DoctorsState => ({
        doctors: [],
    }),
    actions: {
        loadMockData(mockData: any) {
            this.doctors = mockData.doctors.map((doctor: any) => ({
                ...doctor,
                isManager: doctor.isManager === 'true',
            }));
        },
        deleteDoctor(id: number) {
            this.doctors = this.doctors.filter((doctor) => doctor.id !== id);
        },
        addDoctor(fullName: string, department: string) {
            this.doctors.push({
                id: this.doctors.length + 1,
                name: fullName,
                department,
                isManager: false,
            });
        },
        updateDoctor(
            fullName: string,
            department: string,
            selectedDoctorId: number
        ) {
            const index = this.doctors.findIndex(
                (doctor) => doctor.id === selectedDoctorId
            );
            if (index !== -1) {
                this.doctors[index] = {
                    ...this.doctors[index],
                    name: fullName,
                    department: department,
                };
            }
        },
    },
    getters: {
        getDoctors: (state) => state.doctors,
    },
});
