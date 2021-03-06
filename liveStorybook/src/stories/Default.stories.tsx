import React, { useEffect } from 'react';
import { Title, Subtitle, Description, Primary, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { DefaultAPP } from 'swissglider.tailwindlib';

export default {
    title: 'Internal/components/DefaultComponent',
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
                component: 'DefaultComponent',
            },
        },
    },
};

const DefaultComponentTemplate: any = () => {
    console.log(DefaultAPP);
    return (
        <>
            <DefaultAPP.Components.DefaultComponent />
        </>
    );
};

export const DefaultComponent = DefaultComponentTemplate.bind({});
DefaultComponent.args = {};
