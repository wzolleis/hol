export interface Application {
    firstDay: Date
    lastDay: Date
    workingDays: number
    withdrawn: boolean
    leaveType: LeaveType,
    id: string
}

export enum LeaveType {
    URLAUB = 'vacation', GLEITZEIT = 'compensatory'
}