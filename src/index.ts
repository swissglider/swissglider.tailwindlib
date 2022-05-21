import './index.css';
import { useDefaultHooks as useDefaultHooks_ } from './10-addons/hooks/useDefaultHook';
import { default as MetricCard_ } from './1-atoms/MetricCard';
import { default as MetricCardContainer_ } from './2-pro-atoms/MetricCardContainer';
import { default as Button_, ButtonModeMap as ButtonModeMap_ } from './1-atoms/Button';
import { default as Menu_, MenuModeMap as MenuModeMap_, T_MenuItem as T_MenuItem_ } from './1-atoms/Menu';

export namespace TailwindLib {
    export namespace Components {
        export const MetricCard = MetricCard_;
        export const MetricCardContainer = MetricCardContainer_;
        export const Button = Button_;
        export const Menu = Menu_;
    }
    export namespace Hooks {
        export const useDefaultHooks = useDefaultHooks_;
    }
    export namespace Lists {
        export const ButtonModeMap = ButtonModeMap_;
        export const MenuModeMap = MenuModeMap_;
    }
    export namespace Types {
        export type T_MenuItem = T_MenuItem_;
    }
}

// export default TailwindLib;
