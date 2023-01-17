export interface IContactInfo{
    id:number;
    name:string;
    email:string;
    mobile:string;
    landline:string;
    website:string;
    address:string;
}

export interface IContactDetails{
    name:string;
    email:string;
    mobile:string;
    landline:string;
    website:string;
    address:string;
}

export interface IFieldErrors{
    nameError:string;
    emailError:string;
    mobileError:string;
    landlineError:string;
    websiteError:string;
    addressError:string;
}

export type PatternKeys = 'id'|'name'|'email'|'mobile'|'landline'|'website'|'address';