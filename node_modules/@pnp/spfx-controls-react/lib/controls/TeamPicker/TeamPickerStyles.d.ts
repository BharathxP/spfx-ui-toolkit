import { IButtonStyles } from "office-ui-fabric-react/lib/Button";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
import { IBasePickerStyles } from "office-ui-fabric-react/lib/Pickers";
export declare const useTeamPickerStyles: (themeVariant: IReadonlyTheme | undefined) => {
    componentClasses: import("office-ui-fabric-react/lib/Styling").IProcessedStyleSet<{
        eventCircleColor: string;
        separator: string;
        filePickerButtonStyles: string;
        iconStyles: {
            paddingLeft: number;
            fontWeight: number;
            color: string;
        };
    }>;
    pickerStylesMulti: Partial<IBasePickerStyles>;
    pickerStylesSingle: Partial<IBasePickerStyles>;
    renderItemStylesSingle: Partial<import("@uifabric/foundation").IComponentStyles<import("office-ui-fabric-react/lib/Stack").IStackSlots>>;
    renderItemStylesMulti: Partial<import("@uifabric/foundation").IComponentStyles<import("office-ui-fabric-react/lib/Stack").IStackSlots>>;
    renderIconButtonRemoveStyles: Partial<IButtonStyles>;
};
//# sourceMappingURL=TeamPickerStyles.d.ts.map