import { ILabelStyles } from 'office-ui-fabric-react/lib/Label';
import { IStyle } from 'office-ui-fabric-react/lib/Styling';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
export declare const getProgressStepsIndicatorStyles: (themeVariant: IReadonlyTheme, currentStep?: number, totalSteps?: number) => {
    labelStepTitleCurrentStyle: ILabelStyles;
    stackStepsStyles: import("@uifabric/foundation").IComponentStyles<import("office-ui-fabric-react/lib/Stack").IStackSlots>;
    labelStepStyles: ILabelStyles;
    labelStepTitleStyle: ILabelStyles;
    componentClasses: import("office-ui-fabric-react/lib/Styling").IProcessedStyleSet<{
        bulletCurrent: {
            borderStyle: string;
            borderWidth: number;
            borderColor: string;
            width: number;
            height: number;
            borderRadius: string;
            display: string;
            justifyContent: string;
            horizontalAlign: string;
            zIndex: number;
            backgroundColor: string;
            fontSize: number;
            alignItems: string;
        };
        bulletCompleted: {
            cursor: string;
            width: number;
            height: number;
            borderRadius: string;
            display: string;
            justifyContent: string;
            horizontalAlign: string;
            zIndex: number;
            backgroundColor: string;
            color: string;
            fontSize: number;
            alignItems: string;
        };
        bullet: {
            borderColor: string;
            borderStyle: string;
            borderWidth: number;
            width: number;
            height: number;
            borderRadius: string;
            display: string;
            justifyContent: string;
            alignItems: string;
            horizontalAlign: string;
            verticalAlign: string;
            backgroundColor: string;
            fontSize: number;
            zIndex: number;
        };
        line: IStyle;
    }>;
};
//# sourceMappingURL=ProgressStepsIndicatorStyles.d.ts.map