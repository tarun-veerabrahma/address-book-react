import { ContactInfo } from "../../../data/IContactInfo";
import { Contact } from "../../views/homePage/IHomePage";

export interface IContactFormProps{
    id?:number;
    contactDetails?:Contact;
    onClick:(data:ContactInfo,Id:number)=>void;
};
export interface IContactFormState{
    name:string;
    email:string;
    mobile:string;
    landline:string;
    website:string;
    address:string;
    navigate:boolean;
    nameErrorMsg:string;
    emailErrorMsg:string;
    mobileErrorMsg:string;
    landlineErrorMsg:string;
    websiteErrorMsg:string;
    addressErrorMsg:string;
};

