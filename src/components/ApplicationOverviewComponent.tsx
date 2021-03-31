import React, {useEffect, useState} from "react";
import {Application} from "../model/models";
import {parseData} from "../actions/applicationActions";
import {ApplicationComponent} from "./ApplicationComponent";

export const ApplicationOverviewComponent = () => {
    const [data, setData] = useState<Array<Application>>([]);

    const loadData = () => {
        const applications: Application[] = parseData()
        setData(applications)
    };

    useEffect(() => {
        loadData()
        return () => {
        };
    }, []);

    return (
        <div>
            {
                data.map(it => <ApplicationComponent key={it.id} application={it}/>)
            }
        </div>
    )
}