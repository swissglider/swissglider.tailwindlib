import React, { useEffect, useState } from 'react';
import { Title, Subtitle, Description, Primary, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeaderAvatar from '../../1-atoms/HeaderAvatar';

export default {
    title: 'Internal/1-Atoms/HeaderAvatar',
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
                component: 'HeaderAvatar',
            },
        },
    },
} as ComponentMeta<typeof HeaderAvatar>;

const StandardTemplate: ComponentStory<typeof HeaderAvatar> = ({}) => {
    const [avatarMenuListVisible, setAvatarMenuListVisible] = useState<boolean>(false);

    const [mainMenuListVisible, setMainMenuListVisible] = useState<boolean>(false);
    return (
        <nav id="header" className="fixed top-0 z-10 w-full bg-gray-900 shadow">
            <div className="container mx-auto mt-0 flex w-full flex-wrap items-center pt-3 pb-3 md:pb-0">
                <div className="w-1/2 pr-0">
                    <div className="relative float-right inline-block flex">
                        <HeaderAvatar
                            avatarMenuListVisible={avatarMenuListVisible}
                            setAvatarMenuListVisible={setAvatarMenuListVisible}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export const Standard = StandardTemplate.bind({});
Standard.args = {};
