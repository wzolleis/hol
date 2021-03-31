import moment, {Moment} from "moment";

export const formatMoment = (moment: Moment) => {
    return formatDate(moment.toDate())
}

export const formatDate = (date: Date): string => {
    return moment(date).format('DD.MM.YYYY')
}