import { useState } from 'react';
import { TailwindLib } from '..';
import HeaderTitle, { T_HeaderTitleProps } from '../1-atoms/HeaderTitle';
import { T_MenuProps } from '../1-atoms/Menu';

export type T_HeaderProps = {
    headerTitleProps: T_HeaderTitleProps;
    headerMenuProps: T_MenuProps;
};

const Header = ({ headerTitleProps, headerMenuProps }: T_HeaderProps) => {
    const [mainMenuListVisible, setMainMenuListVisible] = useState<boolean>(false);
    return (
        <nav id="header" className="fixed top-0 z-10 w-full bg-gray-900 shadow">
            {/* <div className="container mx-auto mt-0 flex w-full flex-wrap items-center pt-3 pb-3 pr-1 lg:pr-0"> */}
            <div className="flex w-full flex-wrap flex-row justify-between pt-3 pb-3 px-2 items-center">
                {/* Titel */}
                <HeaderTitle {...headerTitleProps} />
                <div className="w-1/2 pr-0 lg:hidden">
                    <div className="relative float-right inline-block flex">
                        {/* <NavigationAvatar {...{ avatarMenuListVisible, setAvatarMenuListVisible }} /> */}
                        <TailwindLib.Components.Button
                            icon="bars"
                            onClick={() => setMainMenuListVisible(!mainMenuListVisible)}
                            id="nav-toggle"
                            mode="dark"
                        />
                    </div>
                </div>
                <TailwindLib.Components.Menu
                    mainMenuListVisible={mainMenuListVisible}
                    mode="dark"
                    id="MainMenu"
                    {...headerMenuProps}
                />
            </div>
        </nav>
    );
};

export default Header;
