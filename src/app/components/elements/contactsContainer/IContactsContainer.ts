import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ContactInfo } from '../../../data/IContactInfo';
export interface IContactsContainerProps{
    contacts: Contact[];
    newContactId?:number;
    onClick:(id:number)=>void;
}
interface Contact{
    id:number;
    name:string;
    email:string;
    mobile:string;
    landline:string;
    website:string;
    address:string;
}
export interface IContactsContainerState{
    contacts: Contact[]|[];
    selectedContactId:number;
    id:number;
}

