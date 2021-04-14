import {Application, LeaveType} from "../app/model/models";
import moment from 'moment'
import Chance from 'chance';


const chance = new Chance()

const baseApplication: Application = {
    firstDay: moment(),
    lastDay: moment().add(10, "days"),
    workdays: 7,
    leaveType: LeaveType.VACATION,
    withdrawn: false,
    id: ''
}

interface Testdata {
    vacation: Application,
    compensatory: Application
}

const data: Testdata = {
    vacation: {
        ...baseApplication,
        id: chance.string()
    },
    compensatory: {
        ...baseApplication,
        leaveType: LeaveType.COMPENSATORY,
        id: chance.string()
    }
}

export default data;