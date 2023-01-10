import React from 'react';
import { IContactDetailsProps } from '../../elements/contactDetails/IContactDetails';

export interface IHomePageProps{
    addIsClicked?: boolean;
}
export interface IHomePageState{
    contacts:Contact[];
    uniqueId: number;
    selectedContactId:number|undefined;
    isEditClicked: boolean;
}
export interface Contact{
    id:number;
    name:string;
    email:string;
    mobile:string;
    landline:string;
    website:string;
    address:string;
}