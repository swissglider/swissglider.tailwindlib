import React, { useEffect } from 'react';
import { Title, Subtitle, Description, Primary, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeaderTitle from '../../1-atoms/HeaderTitle';

export default {
    title: 'Internal/1-Atoms/HeaderTitle',
    argTypes: {
        title: {
            name: 'Header Title',
        },
        textColor: {
            name: 'Header Title Color',
            options: ['text-gray-100', 'text-red-100', 'text-yellow-200', 'text-pink-600'],
            control: { type: 'select' },
        },
        titleIcon: {
            name: 'Header Title Icon',
            options: ['moon', '', 'sun', 'snowflake'],
            control: { type: 'select' },
        },
        titleIconColor: {
            name: 'Header Title Icon Color',
            options: ['text-blue-400', 'text-red-100', 'text-yellow-200', 'text-pink-600'],
            control: { type: 'select' },
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
                component: 'HeaderTitle',
            },
        },
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof HeaderTitle>;

const StandardTemplate: ComponentStory<typeof HeaderTitle> = ({ title, textColor, titleIcon, titleIconColor }) => {
    return (
        <nav id="header" className="fixed top-0 z-10 w-full bg-gray-900 shadow">
            <div className="container mx-auto mt-0 flex w-full flex-wrap items-center pt-3 pb-3 md:pb-0">
                <HeaderTitle
                    title={title}
                    textColor={textColor}
                    titleIcon={titleIcon}
                    titleIconColor={titleIconColor}
                />
            </div>
        </nav>
    );
};

export const Standard = StandardTemplate.bind({});
Standard.args = {
    title: 'Admin Dark Mode',
    textColor: 'text-gray-100',
    titleIcon: 'moon',
    titleIconColor: 'text-gray-100',
};
