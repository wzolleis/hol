import React from "react";
import {Application} from "../model/models";
import {formatMoment} from "../utils/dateUtils";

export interface ApplicationComponentProps {
    application: Application
}

export const ApplicationComponent = (props: ApplicationComponentProps) => {

    const {application} = props
    return (
        <li className="list-group-item">
            {formatMoment(application.firstDay)} - {formatMoment(application.lastDay)} ({application.workingDays})
        </li>
    )
}