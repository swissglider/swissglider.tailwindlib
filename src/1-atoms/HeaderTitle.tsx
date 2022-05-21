import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

export type T_HeaderTitleProps = {
    title: string;
    textColor?: string;
    titleIcon?: IconName;
    titleIconColor?: string;
    titleLink?: string;
};

const HeaderTitle = ({
    title,
    textColor = 'text-gray-100',
    titleIcon = 'moon',
    titleIconColor = 'text-blue-400',
    titleLink = '#',
}: T_HeaderTitleProps) => {
    return (
        <div className="w-1/2 pl-2 md:pl-0">
            <a
                className={`text-base font-bold ${textColor} no-underline hover:no-underline xl:text-xl`}
                href={titleLink}
            >
                {titleIcon && (
                    <span className={titleIconColor}>
                        <FontAwesomeIcon icon={['fas', titleIcon]} />
                    </span>
                )}{' '}
                {title}
            </a>
        </div>
    );
};

export default HeaderTitle;
