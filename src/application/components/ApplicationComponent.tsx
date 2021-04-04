import React from "react";
import {Application} from "../../app/model/models";
import {formatMoment} from "../../utils/dateUtils";

export interface ApplicationComponentProps {
    application: Application
}

export const ApplicationComponent = (props: ApplicationComponentProps) => {
    const {application} = props
    const lastDay = formatMoment(application.lastDay)
    const firstDay = formatMoment(application.firstDay)
    const workingDays = application.workingDays

    return (
        <li className="list-group-item">
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className='mb-3'>
                            <label className='form-label' htmlFor='firstday'>Start</label>
                            <input id='firstday' className='form-control' defaultValue={firstDay} readOnly={true}/>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label' htmlFor='lastDay'>Ende</label>
                            <input id='lastDay' className='form-control' defaultValue={lastDay} readOnly={true}/>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label' htmlFor='workingDays'>Tage</label>
                            <input id='workingDays' className='form-control' defaultValue={workingDays} readOnly={true}/>
                        </div>
                    </form>
                </div>
            </div>
        </li>
    )
}