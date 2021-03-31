import {Moment} from "moment";

export interface Application {
    firstDay: Moment
    lastDay: Moment
    workingDays: number
    withdrawn: boolean
    leaveType: LeaveType,
    id: string
}

export enum LeaveType {
    URLAUB = 'vacation', GLEITZEIT = 'compensatory'
}