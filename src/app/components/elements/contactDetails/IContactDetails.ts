import { IContactDetails } from "../../../models/IContactInfo";

export interface IContactDetailsProps{
    contactToBeDisplayed:IContactDetails
    onEditClicked:()=>void;
    onDeleteClicked:()=>void;
}
export interface IContactDetailsState{
    contactToBeDisplayed:IContactDetails
}