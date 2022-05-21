import React, { useEffect } from 'react';
import { Title, Subtitle, Description, Primary, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TailwindLib from '../../.';

export default {
    title: 'Internal/1-Atoms/Button',
    argTypes: {
        text: {
            name: 'Button Text',
        },
        icon: {
            name: 'Button Icon',
            options: [undefined, 'bars', 'chess', 'dice-d20', 'skull-crossbones', 'fire'],
            control: { type: 'select' },
        },
        textAfterIcon: {
            name: 'Text after Icon',
        },
        mode: {
            name: 'Mode: Default Dark',
            options: Object.keys(TailwindLib.Lists.ButtonModeMap),
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
                component: 'Button',
            },
        },
    },
} as ComponentMeta<typeof TailwindLib.Components.Button>;

const ButtonTemplate: ComponentStory<typeof TailwindLib.Components.Button> = ({ text, icon, textAfterIcon, mode }) => {
    if (mode === 'dark') {
        return (
            <div className="flex justify-center rounded-full p-8 bg-gray-900">
                <TailwindLib.Components.Button text={text} icon={icon} textAfterIcon={textAfterIcon} mode={mode} />
            </div>
        );
    }

    return (
        <div className="flex justify-center rounded-full p-8 bg-gray-50">
            <TailwindLib.Components.Button text={text} icon={icon} textAfterIcon={textAfterIcon} mode={mode} />
        </div>
    );
};

export const Button1 = ButtonTemplate.bind({});
Button1.args = {
    text: '',
    icon: 'bars',
    textAfterIcon: false,
    mode: 'dark',
};
