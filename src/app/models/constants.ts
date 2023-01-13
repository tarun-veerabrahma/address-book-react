import { IContactDetails,IContactInfo } from "./IContactInfo"
export const patterns:IContactDetails = {
    name: "^[A-za-z ]{3,}$",
    email: "^[A-Za-z0-9._%+-]+@[A-Za-z0-9\.-]+\.[A-Za-z]{2,3}$",
    mobile: "^(([\+][(][0-9]{1,3}[)])|0|([\+][0-9]{1,3}))?( )?[1-9][0-9]{9}$",
    landline: "^[0-9]{2,4}[(\-) ]?[0-9]{6,8}$",
    website: "^(((http|https)://)|(w{3}\.))$",
    address: "[0-9A-Za-z\.(\-)\/: \n]+$"
}
export const emptyContactObject:IContactInfo = {
    id: 0,
    name:'',
    email:'',
    mobile:'',
    landline:'',
    website:'',
    address:''
}