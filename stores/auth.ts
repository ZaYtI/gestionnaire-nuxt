import { defineStore } from 'pinia';

interface User {
    int: number,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    roles: string[],
    password: string,
    contract: Contract[],
    userGroup: UserGroup[],
}

interface UserGroup {
    id: number,
    groupName: string,
    users: User[],
    tasks: Task[],
    manager: User,
}

interface Task {
    id: number,
    name: string,
    description: string,
    estimatedTime: number,
    priority: Priority,
    project: Project,
    userGroup: UserGroup,
}

interface Project {
    id: number,
    priority: string,
    estimatedTime: number,
    tasks: Task[],
}

interface Priority {
    id: number,
    name: string,
    color: string,
    score: number,
}

interface Contract {
    id: number,
    maximalWeeklyHours: number,
    openingHour: number,
    closingHour: number,
    listUsers: User[],
}

interface Distribution {
    id: number,
    user: User,
    morningStart: number,
    morningEnd: number,
    afternoonStart: number,
    afternoonEnd: number,
    date: Date,
}

interface Schedules {
    id: number,
    user: User,
    task: Task,
    timeSpent: number,
    date: Date,
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false as boolean,
        token: localStorage.getItem('sae-token') ?? null,
        isLoggedIn: !!localStorage.getItem('sae-token'),
        project: null as Project | null,
        user: null as User | null,
        task: null as Task | null,
        priority: null as Priority | null,
        hours_worked: null as number | null,
        group: null as UserGroup | null,
        contract: null as Contract | null,
        distribution: null as Distribution | null,
        schedules: null as Schedules | null
    }),

    getters: {
        getIslAuthenticated(): boolean {
            return this.authenticated
        },

        getIsLoggedIn(): boolean {
            return this.isLoggedIn;
        },

        getProject(): Project | null {
            return this.project
        },

        getToken(): string | null {
            return this.token
        },

        getTask(): Task | null {
            return this.task
        },

        getPriority(): Priority | null {
            return this.priority
        },

        getHoursWorked(): number | null {
            return this.hours_worked
        },

        getUser(): User | null {
            return this.user
        },

        getUserGroup(): UserGroup | null {
            return this.group
        },

        getContract(): Contract | null {
            return this.contract
        },

        getDistribution(): Distribution | null {
            return this.distribution
        },

        getSchedules(): Schedules | null {
            return this.schedules
        },

        getUserRole(): string[] {
            return this.user?.roles ?? []
        }

    },

    actions: {

        async setIsLoggedIn(newValue: boolean): Promise<void> {
            this.isLoggedIn = newValue
        },

        async setToken(newValue: string): Promise<void> {
            this.token = newValue
        },
        // Méthodes pour l'entité Contrat
        async contract(): Promise<void> {
            const response = await fetch('http:localhost:8083/api/contracts', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                }
            })

            const responseData = await response.json()
            if (responseData.status !== 200) {
                throw new Error(responseData.message || 'Failed to get contracts');
            }
            this.contract = responseData
        },

        async specificContract(id: number): Promise<void> {
            const response = await fetch(`http:localhost:8083/api/contracts/${id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                }
            })
            const responseData = await response.json()
            if (responseData.status !== 200) {
                throw new Error(responseData.message || 'Failed to delete contract');
            }
            this.contract = responseData
        },

        async createContract(contract: Contract): Promise<void> {
            const response = await fetch('http:localhost:8083/api/contracts', {
                method: 'POST',
                body: JSON.stringify(contract),
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                }
            })
            const responseData = await response.json()
            if (responseData.status !== 200) {
                throw new Error(responseData.message || 'Failed to create contract');
            }
            this.contract = responseData
        },

        async replaceContract(contract: Contract, id: number): Promise<void> {
            const response = await fetch(`http:localhost:8083/api/contracts/${id}`, {
                method: 'PUT',
                body: JSON.stringify(contract),
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                }
            })
            const responseData = await response.json()
            if (responseData.status !== 200) {
                throw new Error(responseData.message || 'Failed to update contract');
            }
            this.contract = responseData
        },

        async updateContract(contract: Contract, id: number): Promise<void> {
            const response = await fetch(`http:localhost:8083/api/contracts/${id}`, {
                method: 'PATCH',
                body: JSON.stringify(contract),
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                }
            })
            const responseData = await response.json()
            if (responseData.status !== 200) {
                throw new Error(responseData.message || 'Failed to update contract');
            }
            this.contract = responseData
        },

        async deleteContract(id: number): Promise<void> {
            const response = await fetch(`http:localhost:8083/api/contracts/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                }
            })
            const responseData = await response.json()
            if (responseData.status !== 200) {
                throw new Error(responseData.message || 'Failed to delete contract');
            }
            this.contract = responseData
        },

        // Méthodes pour l'entité Distribution
        async distribution(): Promise<void> {
            const response = await fetch('http:localhost:8083/api/distribution', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                }
            })
            const responseData = await response.json()
            if (responseData.status !== 200) {
                throw new Error(responseData.message || 'Failed to get distribution');
            }
            this.distribution = responseData
        },

        async specificDistribution(id: number): Promise<void> {
            const response = await fetch(`http:localhost:8083/api/distribution/${id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                }
            })
            const responseData = await response.json()
            if (responseData.status !== 200) {
                throw new Error(responseData.message || 'Failed to get distribution');
            }
            this.distribution = responseData
        },

        async createDistribution(distribution: Distribution): Promise<void> {
            const response = await fetch('http:localhost:8083/api/distribution', {
                method: 'POST',
                body: JSON.stringify(distribution),
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                }
            })
            const responseData = await response.json()
            if (responseData.status !== 200) {
                throw new Error(responseData.message || 'Failed to create distribution');
            }
            this.distribution = responseData
        },

        async replaceDistribution(distribution: Distribution, id: number): Promise<void> {
            const response = await fetch(`http:localhost:8083/api/distribution/${id}`, {
                method: 'PUT',
                body: JSON.stringify(distribution),
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                }
            })
            const responseData = await response.json()
            if (responseData.status !== 200) {
                throw new Error(responseData.message || 'Failed to update distribution');
            }
            this.distribution = responseData
        },

        async updateDistribution(distribution: Distribution, id: number): Promise<void> {
            const response = await fetch(`http:localhost:8083/api/distribution/${id}`, {
                method: 'PATCH',
                body: JSON.stringify(distribution),
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                }
            })
            const responseData = await response.json()
            if (responseData.status !== 200) {
                throw new Error(responseData.message || 'Failed to update distribution');
            }
            this.distribution = responseData
        },

        async deleteDistribution(id: number): Promise<void> {
            const response = await fetch(`http:localhost:8083/api/distribution/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                }
            })
            const responseData = await response.json()
            if (responseData.status !== 200) {
                throw new Error(responseData.message || 'Failed to delete distribution');
            }
            this.distribution = responseData
        },

    }
})