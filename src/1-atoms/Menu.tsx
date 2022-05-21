import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';

export type T_MenuItem = {
    itemId: string;
    name: string;
    colors?: { text: string; border: string; hoverBorder: string };
    icon?: IconName;
    selected?: boolean;
};

export const MenuModeMap = {
    dark: '',
    light: '',
    onFire: '',
};

export type T_MenuProps = {
    menuList: Array<T_MenuItem>;
    mode?: keyof typeof MenuModeMap;
    mainMenuListVisible?: boolean;
    searchFunction?: (searchString: string) => void;
    id?: string;
    onClick: (itemId: string) => void;
};

const defaultColors = {
    text: 'text-blue-400',
    border: 'border-blue-400',
    hoverBorder: 'border-blue-400',
};

const Menu = ({
    menuList,
    mainMenuListVisible = false,
    mode = 'dark',
    searchFunction,
    id = '',
    onClick,
}: Record<string, any>) => {
    const [searchString, setSearchString] = useState<string>('');
    return (
        <div
            className={`${
                !mainMenuListVisible ? 'hidden' : ''
            } z-20 mt-2 w-full flex-grow bg-gray-900 lg:mt-0 lg:block lg:flex lg:w-auto lg:items-center`}
            id={id}
        >
            <ul className="list-reset flex-1 items-center px-4 md:px-0 lg:flex">
                {menuList &&
                    menuList.map(({ itemId, name, colors = defaultColors, icon, selected = false }: T_MenuItem) => (
                        <li className="my-2 mr-6 md:my-0" key={itemId}>
                            {selected ? (
                                <div
                                    onClick={() => onClick(itemId)}
                                    className={`cursor-pointer block border-b-2 ${colors.border} py-1 pl-1 align-middle ${colors.text} no-underline hover:${colors.hoverBorder} hover:text-gray-100 md:py-3`}
                                >
                                    {icon && (
                                        <FontAwesomeIcon className={`${colors.text}`} size="1x" icon={['fas', icon]} />
                                    )}{' '}
                                    <span className="pb-1 text-sm md:pb-0">{name}</span>
                                </div>
                            ) : (
                                <div
                                    onClick={() => onClick(itemId)}
                                    className={`cursor-pointer block border-b-2 border-gray-900 py-1 pl-1 align-middle text-gray-500 no-underline hover:${colors.hoverBorder} hover:text-gray-100 md:py-3`}
                                >
                                    {icon && <FontAwesomeIcon size="xs" icon={['fas', icon]} />}{' '}
                                    <span className="pb-1 text-sm md:pb-0">{name}</span>
                                </div>
                            )}
                        </li>
                    ))}
            </ul>

            {searchFunction && (
                <div className="pull-right relative pl-4 pr-4 lg:pb-0 md:pr-0 pb-2">
                    <input
                        type="search"
                        placeholder="Search"
                        className="w-full appearance-none rounded border border-gray-800 bg-gray-900 py-1 px-2 pl-10 text-sm leading-normal text-gray-400 transition focus:border-gray-600 focus:outline-none"
                        onChange={(e) => setSearchString(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                if (searchFunction) searchFunction(searchString);
                            }
                        }}
                    />
                    <div
                        className="search-icon absolute"
                        style={{ top: '0.375rem', left: '1.75rem' }}
                        onClick={() => {
                            if (searchFunction) searchFunction(searchString);
                        }}
                    >
                        <svg
                            className="pointer-events-none h-4 w-4 fill-current text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                        </svg>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menu;
