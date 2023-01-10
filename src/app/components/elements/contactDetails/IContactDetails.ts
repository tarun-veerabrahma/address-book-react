import React from "react";
export interface IContactDetailsProps{
    name:string;
    email:string;
    mobile:string;
    landline:string;
    website:string;
    address:string;
    onEditClicked:()=>void;
    onDeleteClicked:()=>void;
}
export interface IContactDetailsState{
    name:string;
    email:string;
    mobile:string;
    landline:string;
    website:string;
    address:string;
}