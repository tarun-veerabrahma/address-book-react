import { IContactInfo } from '../../../models/IContactInfo';

export interface IContactsContainerProps{
    contacts: IContactInfo[];
    newContactId?:number;
    onClick:(id:number)=>void;
}

export interface IContactsContainerState{
    contacts: IContactInfo[]|[];
    selectedContactId:number;
}

