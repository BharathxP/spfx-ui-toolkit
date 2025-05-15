import { IDocumentCardStyles } from "office-ui-fabric-react/lib/DocumentCard";
import { IStyle } from "office-ui-fabric-react/lib/Styling";
export declare const useAddCommentStyles: () => {
    documentCardUserStyles: Partial<IDocumentCardStyles>;
    deleteButtonContainerStyles: Partial<import("@uifabric/foundation").IComponentStyles<import("office-ui-fabric-react/lib/Stack").IStackSlots>>;
    reactMentionStyles: {
        control: IStyle;
        "&multiLine": {
            control: IStyle;
            highlighter: IStyle;
            input: IStyle;
        };
        "&singleLine": {
            display: string;
            height: number;
            outlineColor: string;
            border: string;
            highlighter: {
                padding: number;
                border: string;
            };
            input: {
                padding: number;
                width: string;
                borderRadius: number;
                border: string;
            };
        };
        suggestions: {
            list: {
                backgroundColor: string;
                border: string;
                fontSize: number;
            };
            item: {
                padding: string;
                borderBottom: string;
                borderBottomColor: string;
                "&focused": {
                    backgroundColor: string;
                };
            };
        };
    };
    itemContainerStyles: import("@uifabric/foundation").IComponentStyles<import("office-ui-fabric-react/lib/Stack").IStackSlots>;
    searchMentionContainerStyles: Partial<import("@uifabric/foundation").IComponentStyles<import("office-ui-fabric-react/lib/Stack").IStackSlots>>;
    mentionsClasses: import("office-ui-fabric-react/lib/Styling").IProcessedStyleSet<{
        mention: IStyle;
    }>;
    componentClasses: import("office-ui-fabric-react/lib/Styling").IProcessedStyleSet<{
        container: IStyle;
    }>;
};
//# sourceMappingURL=useAddCommentStyles.d.ts.map