import { ContactInfo } from "../../../data/IContactInfo";
import { Contact } from "../../views/homePage/IHomePage";

export interface IContactFormProps{
    id?:number;
    contactDetails?:Contact;
    onClick:(data:ContactInfo,Id:number)=>void;
};
export interface IContactFormState{
    details:ContactDetails;
    navigate:boolean;
    errorMgs:ErrorMsgs;
};
interface ContactDetails{
    name:string;
    email:string;
    mobile:string;
    landline:string;
    website:string;
    address:string;
};
interface ErrorMsgs{
    name:string;
    email:string;
    mobile:string;
    landline:string;
    website:string;
    address:string;
}

