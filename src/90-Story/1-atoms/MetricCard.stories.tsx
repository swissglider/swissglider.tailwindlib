import React, { useEffect } from 'react';
import { Title, Subtitle, Description, Primary, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TailwindLib from '../../.';

export default {
    title: 'Internal/1-Atoms/MetricCard',
    argTypes: {
        mainIcon: {
            name: 'Main Icon',
            options: ['wallet', 'chess', 'dice-d20', 'skull-crossbones'],
            control: { type: 'select' },
        },
        mainIconBGColor: {
            name: 'Main Icon Background Color',
            options: ['bg-blue-400', 'bg-red-600', 'bg-yellow-300', 'bg-pink-300'],
            control: { type: 'select' },
        },
        metricIcon: {
            name: 'Metric Icon',
            options: ['caret-up', 'arrow-trend-up', 'retweet', 'repeat'],
            control: { type: 'select' },
        },
        metricIconColor: {
            name: 'Metric Icon Text Color',
            options: ['text-blue-200', 'text-red-100', 'text-yellow-200', 'text-pink-600'],
            control: { type: 'select' },
        },
        metricValue: {
            name: 'Metric Value',
        },
    },
    args: {},
    parameters: {
        controls: { hideNoControlsWarning: true },
        docs: {
            page: () => {
                return (
                    <>
                        <Title />
                        <Subtitle />
                        <Description />
                        <Primary />
                        <ArgsTable story={PRIMARY_STORY} />
                    </>
                );
            },
            description: {
                component: 'MetricCard',
            },
        },
    },
} as ComponentMeta<typeof TailwindLib.Components.MetricCard>;

const MetricCardTemplate: ComponentStory<typeof TailwindLib.Components.MetricCard> = ({
    mainIcon,
    metricIcon,
    mainIconBGColor,
    metricIconColor,
    metricValue,
    metricName,
}) => {
    return (
        <div className="flex flex-wrap">
            <div className="w-full p-3 md:w-1/2 xl:w-1/3 2xl:w-1/4">
                <TailwindLib.Components.MetricCard
                    mainIcon={mainIcon}
                    metricIcon={metricIcon}
                    mainIconBGColor={mainIconBGColor}
                    metricIconColor={metricIconColor}
                    metricValue={metricValue}
                    metricName={metricName}
                />
            </div>
        </div>
    );
};

export const MetricCard1 = MetricCardTemplate.bind({});
MetricCard1.args = {
    mainIcon: 'wallet',
    mainIconBGColor: 'bg-blue-400',
    metricIcon: 'caret-up',
    metricIconColor: 'text-green-200',
    metricValue: '$3249',
    metricName: 'Total Revenue',
};
