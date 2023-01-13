import { IContactInfo } from "../../../models/IContactInfo";

export interface IHomePageProps{
    addIsClicked?: boolean;
}
export interface IHomePageState{
    contacts:IContactInfo[];
    uniqueId: number;
    selectedContactId:number|undefined;
    isEditClicked: boolean;
}
