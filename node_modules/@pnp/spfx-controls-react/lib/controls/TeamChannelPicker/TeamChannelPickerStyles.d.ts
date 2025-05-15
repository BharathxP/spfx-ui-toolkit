import { IBasePickerStyles } from "office-ui-fabric-react/lib/Pickers";
import { IButtonStyles } from "office-ui-fabric-react/lib/Button";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
export declare const useTeamChannelPickerStyles: (themeVariant: IReadonlyTheme | undefined) => {
    renderIconButtonRemoveStyles: Partial<IButtonStyles>;
    pickerStyles: Partial<IBasePickerStyles>;
    renderItemStylesSingle: Partial<import("@uifabric/foundation").IComponentStyles<import("office-ui-fabric-react/lib/Stack").IStackSlots>>;
    renderItemStylesMulti: Partial<import("@uifabric/foundation").IComponentStyles<import("office-ui-fabric-react/lib/Stack").IStackSlots>>;
    pickerStylesMulti: Partial<IBasePickerStyles>;
    pickerStylesSingle: Partial<IBasePickerStyles>;
    componentClasses: import("office-ui-fabric-react/lib/Styling").IProcessedStyleSet<{
        separator: string;
        iconChannelItemStyles: {
            fontSize: number;
            color: string;
        };
        iconChannelInfoStyles: {
            fontSize: number;
            color: string;
        };
    }>;
};
//# sourceMappingURL=TeamChannelPickerStyles.d.ts.map