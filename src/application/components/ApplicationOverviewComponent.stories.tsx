import React from 'react';
import {Meta, Story} from '@storybook/react';
import data from '../../testdata/testdata'
import {ApplicationOverviewComponent, ApplicationOverviewComponentProps} from "./ApplicationOverviewComponent";

export default {
    title: 'application/vacation',
    component: ApplicationOverviewComponent,
} as Meta;

const Template: Story<ApplicationOverviewComponentProps> = (args) => <ApplicationOverviewComponent {...args} />;

export const Vacation = Template.bind({});

Vacation.args = {
    data: [data.vacation, data.compensatory]
}