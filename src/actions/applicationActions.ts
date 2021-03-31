import {Application, LeaveType} from "../model/models";
import data from '../data/urlaub.json'
import moment from "moment"


function isArray(data: any): data is Array<any> {
    return (data as Array<any>).length !== undefined;
}

const leaveType = (leaveType: string): LeaveType => {
    if (leaveType === LeaveType.GLEITZEIT) {
        return LeaveType.GLEITZEIT
    }
    return LeaveType.URLAUB
}

export const parseData = (): Application[] => {

    if (isArray(data)) {
        return data.map((it: any) => {
            const details: any = it.application.applicationCore
            const application: Application = {
                firstDay: moment(details.firstDay).toDate(),
                lastDay: moment(details.lastDay).toDate(),
                workingDays: details.workdays,
                withdrawn: details.withdrawn,
                leaveType: leaveType(details.leaveType),
                id: details.id
            }
            return application
        })
    }
    return []

}
