import {Application, LeaveType} from "../../app/model/models";
import data from '../../data/urlaub_2020_mod.json'
import moment from "moment"

const leaveType = (leaveType: string): LeaveType => {
    if (leaveType === LeaveType[LeaveType.COMPENSATORY]) {
        return LeaveType.COMPENSATORY
    } else if (leaveType === LeaveType[LeaveType.VACATION]) {
        return LeaveType.VACATION
    } else if (leaveType === LeaveType[LeaveType.SPECIAL]) {
        return LeaveType.SPECIAL
    }

    return LeaveType.VACATION
}

export const leaveTypeLabel = (leaveType: LeaveType) => {
    if (leaveType === LeaveType.VACATION) {
        return "Urlaub"
    } else if (leaveType === LeaveType.COMPENSATORY) {
        return "Gleitzeit"
    }
    else if (leaveType === LeaveType.SPECIAL) {
        return "Spezial"
    }

    return "Urlaub"
}


export const parseData = (): Array<Application> => {
    return data.map((application) => {
        return {
            id: application.id,
            workdays: application.workdays,
            lastDay: moment(application.lastDay),
            firstDay: moment(application.firstDay),
            withdrawn: application.withrawn,
            leaveType: leaveType(application.leaveType)
        }
    })
}
