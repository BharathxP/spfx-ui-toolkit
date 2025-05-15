import { ISPService, ILibsOptions, IFieldsOptions, IContentTypesOptions } from "./ISPService";
import { ISPContentType, ISPField, ISPLists } from "../common/SPEntities";
export default class SPServiceMock implements ISPService {
    private _includeDelay?;
    private _delayTimeout?;
    constructor(includeDelay?: boolean, delayTimeout?: number);
    getFields(options?: IFieldsOptions): Promise<ISPField[]>;
    getContentTypes(options?: IContentTypesOptions): Promise<ISPContentType[]>;
    getListItems(filterText: string, listId: string, internalColumnName: string, field: ISPField, keyInternalColumnName?: string, webUrl?: string): Promise<any[]>;
    getField: (listId: string, internalColumnName: string, webUrl?: string) => Promise<ISPField | undefined>;
    /**
    * The mock lists to present to the local workbench
    */
    private static _lists;
    getLibs(options?: ILibsOptions): Promise<ISPLists>;
    /**
    * Locks the thread for the specified amount of time
    * @param ms Milliseconds to wait
    */
    private sleep;
}
//# sourceMappingURL=SPServiceMock.d.ts.map