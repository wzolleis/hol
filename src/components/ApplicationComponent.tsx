import React from "react";
import {Application} from "../model/models";
import {formatDate} from "../utils/dateUtils";

export interface ApplicationComponentProps {
    application: Application
}

export const ApplicationComponent = (props: ApplicationComponentProps) => {
    const {application} = props
    return (
        <div>
            <div>{formatDate(application.firstDay)} - {formatDate(application.lastDay)} ({application.workingDays})</div>
        </div>
    )
}