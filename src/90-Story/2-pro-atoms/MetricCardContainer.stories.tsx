import React, { useEffect } from 'react';
import { Title, Subtitle, Description, Primary, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TailwindLib from '../../.';

export default {
    title: 'Internal/2-Pro-Atoms/MetricCardContainer',
    argTypes: {},
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
};

const MetricCardContainerTemplate: any = () => {
    return (
        <div className="container mx-auto w-full pt-20">
            <div className="mb-16 w-full px-4 leading-normal text-gray-800 md:mt-8 md:px-0">
                {' '}
                <TailwindLib.Components.MetricCardContainer>
                    <TailwindLib.Components.MetricCard
                        mainIcon="chess"
                        mainIconBGColor="bg-pink-300"
                        metricIcon="retweet"
                        metricValue="13 Frankä"
                        metricName="Schach Kosten"
                        metricIconColor="text-zinc-600"
                    />
                </TailwindLib.Components.MetricCardContainer>
            </div>
        </div>
    );
};

export const MetricCardContainerSingle = MetricCardContainerTemplate.bind({});
MetricCardContainerSingle.args = {};

const MetricCardContainer1Template: any = () => {
    return (
        <div className="container mx-auto w-full pt-20">
            <div className="mb-16 w-full px-4 leading-normal text-gray-800 md:mt-8 md:px-0">
                {' '}
                <TailwindLib.Components.MetricCardContainer>
                    <TailwindLib.Components.MetricCard
                        mainIcon="chess"
                        mainIconBGColor="bg-pink-300"
                        metricIcon="retweet"
                        metricValue="13 Frankä"
                        metricName="Schach Kosten"
                        metricIconColor="text-zinc-600"
                    />
                    <TailwindLib.Components.MetricCard
                        mainIcon="wallet"
                        mainIconBGColor="bg-red-900"
                        metricIcon="arrow-trend-up"
                        metricValue="CHF6573"
                        metricName="JellyAG"
                        metricIconColor="text-red-500"
                    />
                </TailwindLib.Components.MetricCardContainer>
            </div>
        </div>
    );
};

export const MetricCardContainerMultiple = MetricCardContainer1Template.bind({});
MetricCardContainerMultiple.args = {};

const MetricCardContainer2Template: any = () => {
    return (
        <div className="container mx-auto w-full pt-20">
            <div className="mb-16 w-full px-4 leading-normal text-gray-800 md:mt-8 md:px-0">
                {' '}
                <TailwindLib.Components.MetricCardContainer>
                    <TailwindLib.Components.MetricCard
                        mainIcon="chess"
                        mainIconBGColor="bg-pink-300"
                        metricIcon="retweet"
                        metricValue="13 Frankä"
                        metricName="Schach Kosten"
                        metricIconColor="text-zinc-600"
                    />
                    <div className="text-center rounded border border-gray-800 bg-gray-900 p-2 shadow text-sky-500">
                        I'm also here
                    </div>
                    <TailwindLib.Components.MetricCard
                        mainIcon="wallet"
                        mainIconBGColor="bg-red-900"
                        metricIcon="arrow-trend-up"
                        metricValue="CHF6573"
                        metricName="JellyAG"
                        metricIconColor="text-red-500"
                    />
                </TailwindLib.Components.MetricCardContainer>
            </div>
        </div>
    );
};

export const MetricCardContainerDifferent = MetricCardContainer2Template.bind({});
MetricCardContainerDifferent.args = {};
