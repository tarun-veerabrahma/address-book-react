import { DefaultButton, TextField } from '@fluentui/react';
import '../../../../styles/contactForm.css'
import React from 'react';
import { PatternsType, PatternKeys, ContactInfo } from '../../../data/IContactInfo';
import { Link, Navigate } from 'react-router-dom';
import { IContactFormProps,IContactFormState } from './IContactForm';
export default class AddContact extends React.Component<IContactFormProps,IContactFormState>{
    private patterns:PatternsType = {
        name: "^[A-za-z ]{3,}$",
        email: "^[A-Za-z0-9._%+-]+@[A-Za-z0-9\.-]+\.[A-Za-z]{2,3}$",
        mobile: "^(([\+][(][0-9]{1,3}[)])|0|([\+][0-9]{1,3}))?( )?[1-9][0-9]{9}$",
        landline: "^[0-9]{2,4}[(\-) ]?[0-9]{6,8}$",
        website: "^(((http|https)://)|(w{3}\.))$",
        address: "[0-9A-Za-z\.(\-)\/: \n]+$"
    }
    
    constructor(props:IContactFormProps){
        super(props);
        this.state = {
            details:{
                name:"",
                email:"",
                mobile:"",
                landline:"",
                website:"",
                address:""
            },
            navigate:false,
            errorMgs:{
                name:"",
                email:"",
                mobile:"",
                landline:"",
                website:"",
                address:""
            }
        }
    }
    componentDidMount(): void {
        if(this.props.contactDetails!=undefined){
            this.setState({
                details:{
                    name:this.props.contactDetails.name,
                    email:this.props.contactDetails.email,
                    mobile:this.props.contactDetails.mobile,
                    landline:this.props.contactDetails.landline,
                    website:this.props.contactDetails.website,
                    address:this.props.contactDetails.address
                }
            })
        }
        
    }

    formValidation(){
        // this.validate('name',undefined,this.state.details.name);
        // this.validate('email',undefined,this.state.details.email);
        // this.validate('mobile',undefined,this.state.details.mobile);
        // this.validate('landline',undefined,this.state.details.landline);
        // this.validate('website',undefined,this.state.details.website);
        // this.validate('address',undefined,this.state.details.address);

        let keys = Object.keys(this.state.details) as PatternKeys[];
        keys.forEach((key)=>{this.validate(key,this.state.details[key])})

        if(this.matchFieldsWithPatterns()){
            if(this.props.contactDetails!==undefined){
                this.updateContact();
            }
            else{
                this.addNewContact();
                this.setState({
                    navigate:true
                })
            }
        }
    }

    matchFieldsWithPatterns():boolean{
        let flag = true;
        let keys = Object.keys(this.state.details) as PatternKeys[];
        keys.forEach((key)=>{if(!(this.state.details[key].match(this.patterns[key]))){flag = false;}})
        return flag;
    }

    validate(fieldName: PatternKeys,  value:string):void{
        let error='';
        (value.match(this.patterns[fieldName]))?error= '':(value==='')?error= fieldName.charAt(0).toUpperCase()+fieldName.slice(1)+' is required':error= 'Invalid '+ fieldName;
        let details=this.state.details;
        let errorMsgs = this.state.errorMgs;
        details[fieldName]=value;
        errorMsgs[fieldName]=error;

        (error!==this.state.errorMgs[fieldName])?(this.setState({details:details, errorMgs:errorMsgs})):this.setState({details:details});
        
        // if(fieldName === 'name'){
            
        //     if(error!==this.state.nameErrorMsg){
        //         this.setState({
        //             name:value,
        //             nameErrorMsg:error
        //         });
        //     }
        //     else{
        //         this.setState({name:value});
        //     }
        // }
        // else if(fieldName === 'email'){
        //     if(error!==this.state.emailErrorMsg){
        //         this.setState({
        //             email:value,
        //             emailErrorMsg:error
        //         });
        //     }
        //     else{
        //         this.setState({email:value});
        //     }
        // }
        // else if(fieldName === 'mobile'){
        //     if(error!==this.state.mobileErrorMsg){
        //         this.setState({
        //             mobile:value,
        //             mobileErrorMsg:error
        //         });
        //     }
        //     else{
        //         this.setState({mobile:value});
        //     }
        // }
        // else if(fieldName === 'landline'){
        //     if(error!==this.state.landlineErrorMsg){
        //         this.setState({
        //             landline:value,
        //             landlineErrorMsg:error
        //         });
        //     }
        //     else{
        //         this.setState({landline:value});
        //     }
        // }
        // else if(fieldName === 'website'){
        //     if(error!==this.state.websiteErrorMsg){
        //         this.setState({
        //             website:value,
        //             websiteErrorMsg:error
        //         });
        //     }
        //     else{
        //         this.setState({website:value});
        //     }
        // }
        // else if(fieldName === 'address'){
        //     if(error!==this.state.addressErrorMsg){
        //         this.setState({
        //             address:value,
        //             addressErrorMsg:error
        //         });
        //     }
        //     else{
        //         this.setState({address:value});
        //     }
        // }
        
        
    }
    updateContact(){
        if(this.props.contactDetails!==undefined){
            let contact:ContactInfo={
                id:this.props.contactDetails.id,
                name: this.state.details.name,
                email: this.state.details.email,
                mobile: this.state.details.mobile,
                landline: this.state.details.landline,
                website: this.state.details.website,
                address: this.state.details.address
            }
            this.props.onClick(contact,contact.id);
        }
    }

    addNewContact(){
        let Id = this.props.id;
        if(Id!==undefined){
            Id+=1;
            let contact:ContactInfo = {
                id: Id,
                name: this.state.details.name,
                email: this.state.details.email,
                mobile: this.state.details.mobile,
                landline: this.state.details.landline,
                website: this.state.details.website,
                address: this.state.details.address
            }
            this.props.onClick(contact,Id);
        }
    }

    render(): React.ReactNode {
        return(
            <div className='addContactForm'>
            <div className='fieldsContainer'>
            <TextField errorMessage={this.state.errorMgs.name} onChange={(event)=>{this.validate('name',(event.target as HTMLInputElement).value)}} className='contactFormField' label='Name' required defaultValue={this.props.contactDetails?.name}/>
            <TextField errorMessage={this.state.errorMgs.email} onChange={(event)=>{this.validate('email',(event.target as HTMLInputElement).value)}} className='contactFormField' label='Email' required defaultValue={this.props.contactDetails?.email}/>
            <div className='row'>
                <TextField errorMessage={this.state.errorMgs.mobile} onChange={(event)=>{this.validate('mobile',(event.target as HTMLInputElement).value)}} className='contactFormField' label='Mobile' required defaultValue={this.props.contactDetails?.mobile}/>
                <TextField errorMessage={this.state.errorMgs.landline} onChange={(event)=>{this.validate('landline',(event.target as HTMLInputElement).value)}} className='contactFormField' label='Landline' required defaultValue={this.props.contactDetails?.landline}/>
            </div>
            <TextField errorMessage={this.state.errorMgs.website} onChange={(event)=>{this.validate('website',(event.target as HTMLInputElement).value)}} className='contactFormField' label='Website' required defaultValue={this.props.contactDetails?.website}/>
            <TextField errorMessage={this.state.errorMgs.address} onChange={(event)=>{this.validate('address',(event.target as HTMLInputElement|HTMLTextAreaElement).value)}} className='contactFormField' label='Address' required defaultValue={this.props.contactDetails?.address} multiline rows={4} autoAdjustHeight/>
           </div>
           <div className='buttons'>
            <div className='rightChild'><Link to='/'><DefaultButton className='button' text='Cancel' /></Link></div>
            {(this.props.contactDetails===undefined)?<div className='rightChild'><DefaultButton className='button submit' text='Add' onClick={()=>{this.formValidation()}}/></div>:<div className='rightChild'><DefaultButton className='button submit' text='Save' onClick={()=>{this.formValidation()}}/></div>}
           </div>
            {this.state.navigate && <Navigate to={'/'}/>}
           </div>
        );
    }
}