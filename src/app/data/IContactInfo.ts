import React from 'react';

export interface ContactInfo{
    id:number;
    name:string;
    email:string;
    mobile:string;
    landline:string;
    website:string;
    address:string;
}

export interface PatternsType{
    name:string;
    email:string;
    mobile:string;
    landline:string;
    website:string;
    address:string;
}

export type PatternKeys = 'name'|'email'|'mobile'|'landline'|'website'|'address';