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
        mobile: "^(([\+][(][0-9]{1,3}[)])|0|([\+][0-9]{1,3}))?( )?[0-9]{10}$",
        landline: "^[0-9]{2,4}[(\-) ]?[0-9]{6,8}$",
        website: "^(((http|https)://)|(w{3}\.))$",
        address: "[0-9A-Za-z\.(\-)\/: \n]+$"
    }
    
    constructor(props:IContactFormProps){
        super(props);
        this.state = {
            name:"",
            email:"",
            mobile:"",
            landline:"",
            website:"",
            address:"",
            navigate:false,
            nameErrorMsg:"",
            emailErrorMsg:"",
            mobileErrorMsg:"",
            landlineErrorMsg:"",
            websiteErrorMsg:"",
            addressErrorMsg:""
        }
    }
    componentDidMount(): void {
        if(this.props.contactDetails!=undefined){
            this.setState({
                name:this.props.contactDetails.name,
                email:this.props.contactDetails.email,
                mobile:this.props.contactDetails.mobile,
                landline:this.props.contactDetails.landline,
                website:this.props.contactDetails.website,
                address:this.props.contactDetails.address
            })
        }
        
    }

    formValidation(){
        this.validate('name',undefined,this.state.name);
        this.validate('email',undefined,this.state.email);
        this.validate('mobile',undefined,this.state.mobile);
        this.validate('landline',undefined,this.state.landline);
        this.validate('website',undefined,this.state.website);
        this.validate('address',undefined,this.state.address);
        if(this.state.name.match(this.patterns.name) && this.state.email.match(this.patterns.email) && this.state.mobile.match(this.patterns.mobile) && this.state.landline.match(this.patterns.landline) && this.state.website.match(this.patterns.website) && this.state.address.match(this.patterns.address)){
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


    validate(fieldName: PatternKeys, event?: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, value?:string):void{
        if(value===undefined){
            value = (event?.target as HTMLInputElement | HTMLTextAreaElement).value;
        }
        
        let error='';
        if(value.match(this.patterns[fieldName])){
            error= '';
        }
        else{
            if(value===''){
                error= fieldName.charAt(0).toUpperCase()+fieldName.slice(1)+' is required'
                 
            }
            else{
                error= 'Invalid '+ fieldName;
            }
        }
        
        if(fieldName === 'name'){
            
            if(error!==this.state.nameErrorMsg){
                this.setState({
                    name:value,
                    nameErrorMsg:error
                });
            }
            else{
                this.setState({name:value});
            }
        }
        else if(fieldName === 'email'){
            if(error!==this.state.emailErrorMsg){
                this.setState({
                    email:value,
                    emailErrorMsg:error
                });
            }
            else{
                this.setState({email:value});
            }
        }
        else if(fieldName === 'mobile'){
            if(error!==this.state.mobileErrorMsg){
                this.setState({
                    mobile:value,
                    mobileErrorMsg:error
                });
            }
            else{
                this.setState({mobile:value});
            }
        }
        else if(fieldName === 'landline'){
            if(error!==this.state.landlineErrorMsg){
                this.setState({
                    landline:value,
                    landlineErrorMsg:error
                });
            }
            else{
                this.setState({landline:value});
            }
        }
        else if(fieldName === 'website'){
            if(error!==this.state.websiteErrorMsg){
                this.setState({
                    website:value,
                    websiteErrorMsg:error
                });
            }
            else{
                this.setState({website:value});
            }
        }
        else if(fieldName === 'address'){
            if(error!==this.state.addressErrorMsg){
                this.setState({
                    address:value,
                    addressErrorMsg:error
                });
            }
            else{
                this.setState({address:value});
            }
        }
        
        
    }
    updateContact(){
        if(this.props.contactDetails!==undefined){
            let contact:ContactInfo={
                id:this.props.contactDetails.id,
                name: this.state.name,
                email: this.state.email,
                mobile: this.state.mobile,
                landline: this.state.landline,
                website: this.state.website,
                address: this.state.address
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
                name: this.state.name,
                email: this.state.email,
                mobile: this.state.mobile,
                landline: this.state.landline,
                website: this.state.website,
                address: this.state.address
            }
            this.props.onClick(contact,Id);
        }
    }

    render(): React.ReactNode {
        return(
            <div className='addContactForm'>
            <div className='fieldsContainer'>
            <TextField errorMessage={this.state.nameErrorMsg} onChange={(event)=>{this.validate('name',event)}} className='contactFormField' label='Name' required defaultValue={this.props.contactDetails?.name}/>
            <TextField errorMessage={this.state.emailErrorMsg} onChange={(event)=>{this.validate('email',event)}} className='contactFormField' label='Email' required defaultValue={this.props.contactDetails?.email}/>
            <div className='row'>
                <TextField errorMessage={this.state.mobileErrorMsg} onChange={(event)=>{this.validate('mobile',event)}} className='contactFormField' label='Mobile' required defaultValue={this.props.contactDetails?.mobile}/>
                <TextField errorMessage={this.state.landlineErrorMsg} onChange={(event)=>{this.validate('landline',event)}} className='contactFormField' label='Landline' required defaultValue={this.props.contactDetails?.landline}/>
            </div>
            <TextField errorMessage={this.state.websiteErrorMsg} onChange={(event)=>{this.validate('website',event)}} className='contactFormField' label='Website' required defaultValue={this.props.contactDetails?.website}/>
            <TextField errorMessage={this.state.addressErrorMsg} onChange={(event)=>{this.validate('address',event)}} className='contactFormField' label='Address' required defaultValue={this.props.contactDetails?.address} multiline rows={4} autoAdjustHeight/>
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