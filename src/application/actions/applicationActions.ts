import {Application, LeaveType} from "../../app/model/models";
//import data from '../../data/urlaub.json'
import moment from "moment"

// todo - daten bereitstellen
const data = ''

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
                firstDay: moment(details.firstDay),
                lastDay: moment(details.lastDay),
                workingDays: details.workdays,
                withdrawn: details.withdrawn,
                leaveType: leaveType(details.leaveType),
                id: details.id
            }
            return application
        });
    } else {
        return []
    }

}
