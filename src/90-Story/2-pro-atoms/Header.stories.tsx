import React, { useEffect, useState } from 'react';
import { Title, Subtitle, Description, Primary, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from '../../2-pro-atoms/Header';
import TailwindLib from '../..';

export default {
    title: 'Internal/2-Pro-Atoms/Header',
    argTypes: {
        headerMenuProps: { searchFunction: { action: 'Search for: ' } },
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
                component: 'Header',
            },
        },
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Header>;

const colors = {
    Home: { text: 'text-blue-400', border: 'border-blue-400', hoverBorder: 'border-blue-400' },
    Tasks: { text: 'text-pink-400', border: 'border-pink-400', hoverBorder: 'border-pink-400' },
    Messages: { text: 'text-purple-400', border: 'border-purple-400', hoverBorder: 'border-purple-400' },
    Analytics: { text: 'text-green-400', border: 'border-green-400', hoverBorder: 'border-green-400' },
    Payments: { text: 'text-red-400', border: 'border-red-400', hoverBorder: 'border-red-400' },
};

const MenuList: Array<TailwindLib.Types.T_MenuItem> = [
    { itemId: 'MainMenu_Home', name: 'Home', icon: 'home', selected: true },
    { itemId: 'MainMenu_Task', name: 'Tasks', icon: 'tasks', colors: colors['Tasks'] },
    { itemId: 'MainMenu_Messages', name: 'Messages', icon: 'envelope', colors: colors['Messages'] },
    { itemId: 'MainMenu_Analytics', name: 'Analytics', icon: 'chart-area', colors: colors['Analytics'] },
    { itemId: 'MainMenu_Payments', name: 'Payments', icon: 'wallet', colors: colors['Payments'] },
];

const StandardTemplate: ComponentStory<typeof Header> = ({ headerMenuProps: { searchFunction } }) => {
    const [menuList, setMenuList] = useState<Array<TailwindLib.Types.T_MenuItem>>(MenuList);
    const onClick = (menuItem: string) => {
        const tmp: Array<TailwindLib.Types.T_MenuItem> = [...MenuList];
        tmp.forEach((e) => {
            e.selected = e.itemId === menuItem ? true : false;
        });
        setMenuList(tmp);
    };
    return (
        <Header
            headerTitleProps={{
                title: 'Hallo2',
                textColor: 'text-red-600',
            }}
            headerMenuProps={{
                menuList: menuList,
                onClick: onClick,
                searchFunction: searchFunction,
            }}
        />
    );
};

export const Standard = StandardTemplate.bind({});
Standard.args = {};
