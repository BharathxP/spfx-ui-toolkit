import { IDocumentCardStyles } from "office-ui-fabric-react/lib/DocumentCard";
import { IStackStyles } from "office-ui-fabric-react/lib/Stack";
interface returnObjectStyles {
    itemContainerStyles: IStackStyles;
    deleteButtonContainerStyles: Partial<IStackStyles>;
    userListContainerStyles: Partial<IStackStyles>;
    renderUserContainerStyles: Partial<IStackStyles>;
    documentCardStyles: Partial<IDocumentCardStyles>;
    documentCardDeleteStyles: Partial<IDocumentCardStyles>;
    documentCardUserStyles: Partial<IDocumentCardStyles>;
    configurationListClasses: any;
}
export declare const useListItemCommentsStyles: () => returnObjectStyles;
export {};
//# sourceMappingURL=useListItemCommentsStyles.d.ts.map