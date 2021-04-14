import {Moment} from "moment";

export interface Application {
    firstDay: Moment
    lastDay: Moment
    workdays: number
    withdrawn: boolean
    leaveType: LeaveType,
    id: string
}


export enum LeaveType {
    VACATION, COMPENSATORY, SPECIAL
}