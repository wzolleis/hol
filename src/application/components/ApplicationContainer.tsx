import React, {useEffect, useState} from "react";
import {Application} from "../../app/model/models";
import {parseData} from "../actions/applicationActions";
import {ApplicationOverviewComponent} from "./ApplicationOverviewComponent";


export const ApplicationContainer = () => {
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
            <ApplicationOverviewComponent data={data}/>
        </div>
    )
}