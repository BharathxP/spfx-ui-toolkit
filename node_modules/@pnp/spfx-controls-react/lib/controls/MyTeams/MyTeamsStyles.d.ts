import { IButtonStyles } from "office-ui-fabric-react/lib/Button";
import { IStackTokens } from "office-ui-fabric-react/lib/Stack";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
export declare const getMyTeamsStyles: (themeVariant: IReadonlyTheme) => {
    titleStyles: import("@uifabric/foundation").IComponentStyles<import("office-ui-fabric-react/lib/Text").ITextSlots>;
    stackStyles: import("@uifabric/foundation").IComponentStyles<import("office-ui-fabric-react/lib/Stack").IStackSlots>;
    stackTokens: IStackTokens;
    styleClasses: import("office-ui-fabric-react/lib/Styling").IProcessedStyleSet<{
        webPartTitle: {
            marginBottom: number;
        };
        separator: string;
        styleIcon: string;
        teamsContainer: string;
        teamContainer: string;
    }>;
    commentTextStyles: import("@uifabric/foundation").IComponentStyles<import("office-ui-fabric-react/lib/Text").ITextSlots>;
    showHideButtonStyles: Partial<IButtonStyles>;
};
//# sourceMappingURL=MyTeamsStyles.d.ts.map