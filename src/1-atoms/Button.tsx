import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

const ButtonDark = ({ onClick, id, children }: any) => {
    return (
        <button
            id={id}
            className={`flex appearance-none items-center rounded border border-gray-600 px-3 py-2 text-gray-500 hover:border-teal-500 hover:text-gray-100 focus:outline-none`}
            onClick={() => onClick()}
        >
            {children}
        </button>
    );
};

const ButtonLight = ({ onClick, id, children }: any) => {
    return (
        <button
            id={id}
            className={`flex appearance-none items-center rounded border border-gray-600 px-3 py-2 text-gray-500 hover:border-teal-500 hover:text-gray-800 focus:outline-none`}
            onClick={() => onClick()}
        >
            {children}
        </button>
    );
};

const ButtonOnFire = ({ onClick, id, children }: any) => {
    return (
        <button
            id={id}
            className={`flex appearance-none items-center rounded border border-orange-700 px-3 py-2 text-orange-700 bg-yellow-200 hover:bg-orange-700 hover:border-yellow-500 hover:text-yellow-500 focus:outline-none`}
            onClick={() => onClick()}
        >
            {children}
        </button>
    );
};

export const ButtonModeMap = {
    dark: ButtonDark,
    light: ButtonLight,
    onFire: ButtonOnFire,
};

export type T_ButtonProps = {
    text?: string;
    icon?: IconName;
    onClick?: () => void;
    id?: string;
    textAfterIcon?: boolean;
    mode?: keyof typeof ButtonModeMap;
};

const Button = ({ text, icon, onClick = () => '', id = '', textAfterIcon = false, mode = 'dark' }: T_ButtonProps) => {
    const seperator = text && icon && text != '' ? '\u00A0\u00A0' : '';
    const MainComp = mode in ButtonModeMap ? ButtonModeMap[mode] : ButtonModeMap['dark'];
    return (
        <MainComp onClick={onClick} id={id}>
            {textAfterIcon ? (
                <>
                    {icon && <FontAwesomeIcon icon={['fas', icon]} />}
                    {seperator}
                    {text}
                </>
            ) : (
                <>
                    {text}
                    {seperator}
                    {icon && <FontAwesomeIcon icon={['fas', icon]} />}
                </>
            )}
        </MainComp>
    );
};

export default Button;
