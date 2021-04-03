import {Application, LeaveType} from "../model/models";
import moment from 'moment'
import Chance from 'chance';


const chance = new Chance()

const baseApplication: Application = {
    firstDay: moment(),
    lastDay: moment().add(10, "days"),
    workingDays: 7,
    leaveType: LeaveType.URLAUB,
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
        leaveType: LeaveType.GLEITZEIT,
        id: chance.string()
    }
}

export default data;