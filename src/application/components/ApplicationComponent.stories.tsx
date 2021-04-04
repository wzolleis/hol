import React from 'react';
import {Meta, Story} from '@storybook/react';
import {ApplicationComponent, ApplicationComponentProps} from "./ApplicationComponent";
import data from '../../testdata/testdata'

export default {
    title: 'application/vacation',
    component: ApplicationComponent,
} as Meta;

const Template: Story<ApplicationComponentProps> = (args) => <ApplicationComponent {...args} />;

export const Vacation = Template.bind({});

Vacation.args = {
    application: {
        ...data.vacation
    }
}