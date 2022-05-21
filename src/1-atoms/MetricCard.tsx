import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

export type T_MetricTypeProps = {
    mainIcon: IconName;
    metricIcon?: IconName;
    mainIconBGColor: string;
    metricIconColor?: string;
    metricName: string;
    metricValue: string;
};

const MetricCard = ({
    mainIcon,
    metricIcon = undefined,
    mainIconBGColor,
    metricIconColor = undefined,
    metricValue,
    metricName,
}: T_MetricTypeProps) => {
    return (
        <div className="rounded border border-gray-800 bg-gray-900 p-2 shadow">
            <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                    <div className={`rounded ${mainIconBGColor} p-3`}>
                        <FontAwesomeIcon icon={mainIcon} inverse fixedWidth size="2x" />
                    </div>
                </div>
                <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-400">{metricName}</h5>
                    <h3 className="text-3xl font-bold text-gray-600">
                        {metricValue}{' '}
                        {metricIcon && (
                            <span className={metricIconColor}>
                                <FontAwesomeIcon icon={['fas', metricIcon]} />
                            </span>
                        )}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default MetricCard;
