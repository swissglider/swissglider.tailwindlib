import getRandomKey from '../10-addons/helpers/getRandomKey';
import { T_MetricTypeProps } from '../1-atoms/MetricCard';

const MetricCardContainer = ({ children }: any) => {
    return (
        <div className="flex flex-wrap">
            {Array.isArray(children) ? (
                children.map((child: React.ReactElement<T_MetricTypeProps>) => (
                    <div className="w-full p-3 md:w-1/2 xl:w-1/3 2xl:w-1/4" key={getRandomKey()}>
                        {child}
                    </div>
                ))
            ) : (
                <div className="w-full p-3 md:w-1/2 xl:w-1/3 2xl:w-1/4">{children}</div>
            )}
        </div>
    );
};

export default MetricCardContainer;
