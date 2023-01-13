import { IContactInfo,IContactDetails } from "../../../models/IContactInfo";

export interface IContactFormProps{
    id?:number;
    contactDetails?:IContactInfo;
    onClick:(data:IContactInfo,Id:number,cancel?:boolean)=>void;
};
export interface IContactFormState{
    details:IContactDetails;
    navigate:boolean;
    errorMgs:IContactDetails;
};



