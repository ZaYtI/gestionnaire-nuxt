import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false as boolean, 
        token: localStorage.getItem('item') ?? null,
        project: null as any,
        user: null as any,
        task: null as any,
        priority: null as any,
        hours_worked: null as any,
        group: null as any,
        contract: null as any,
        distribution: null as any,
        schedules : null as any
    }),

    getters: {
        getIslAuthenticated(): boolean {
            return this.authenticated
        },

        getProject(): any {
            return this.project
        },

        getToken(): any {
            return this.token
        },

        getTask(): any {
            return this.task
        },

        getPriority(): any {
            return this.priority
        },

        getHoursWorked(): any {
            return this.hours_worked
        },

        getUser(): any {
            return this.user
        },

        getGroup(): any {
            return this.group
        },

        getContract(): any {
            return this.contract
        },

        getDistribution(): any {
            return this.distribution
        },

        getSchedules(): any {
            return this.schedules
        }

    },
})