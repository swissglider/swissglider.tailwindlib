import React, { FC, useEffect } from 'react';
import Button from '../../1-atoms/Button';
import { useDefaultHooks } from '../../10-addons/hooks/useDefaultHook';

const DefaultComponent: FC<any> = () => {
    useDefaultHooks();

    useEffect(() => {
        console.log('DefaultComponent');
    }, []);
    return (
        <div>
            <Button text="Test" icon="cube" textAfterIcon={false} mode="light" />
        </div>
    );
};

export default DefaultComponent;
