import React from "react";
import {Application, LeaveType} from "../../app/model/models";
import {formatMoment} from "../../utils/dateUtils";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import {leaveTypeLabel} from "../actions/applicationActions";


interface TableData {
    firstDay: string
    lastDay: string
    workdays: number
    withdrawn: boolean
    leaveType: string,
    id: string
}


const mapToRow = (application: Application): TableData => {
    return {
        ...application,
        leaveType: leaveTypeLabel(application.leaveType),
        firstDay: formatMoment(application.firstDay),
        lastDay: formatMoment(application.lastDay),
    }
}

export interface ApplicationOverviewComponentProps {
    data: Array<Application>
}

const columns = () => {
    return [{
        dataField: 'firstDay',
        text: 'Start',
    }, {
        dataField: 'lastDay',
        text: 'Ende',
    }, {
        dataField: 'workdays',
        text: 'Arbeitstage'
    }, {
        dataField: 'leaveType',
        text: 'Typ',
    }, {
        dataField: 'id',
        text: 'ID',
        hidden: true
    }];
}

export const ApplicationOverviewComponent = (props: ApplicationOverviewComponentProps) => {
    const {data} = props
    const tableData = data.map(mapToRow)
    const {SearchBar} = Search;

    return (
        <div>
            <ToolkitProvider
                keyField="id"
                data={tableData}
                columns={columns()}
                bootstrap4={true}
                search
            >
                {
                    props => (
                        <div>
                            <SearchBar {...props.searchProps} />
                            <p/>
                            <BootstrapTable {...props.baseProps}/>
                        </div>
                    )
                }
            </ToolkitProvider>
        </div>
    )
}