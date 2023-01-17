import { DefaultButton, TextField } from '@fluentui/react';
import './contactForm.scss'
import React from 'react';
import { PatternKeys} from '../../../models/IContactInfo';
import { Link, Navigate } from 'react-router-dom';
import { IContactFormProps,IContactFormState } from './IContactForm';
import { patterns} from '../../../models/constants';
import { IContactInfo } from '../../../models/IContactInfo';

export default class AddContact extends React.Component<IContactFormProps,IContactFormState>{
    
    
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
        this.formValidation = this.formValidation.bind(this)
    }
    
    componentDidMount(): void {
        if(this.props.contactDetails){
            this.setState({
                details:this.props.contactDetails
            })
        }
    }

    formValidation(){
        let flag=true;
        (Object.keys(this.state.details) as PatternKeys[]).forEach((key)=>{if(key!=='id'){if(flag){flag=this.validate(key,this.state.details[key])}else{this.validate(key,this.state.details[key])}}})
        
        if(flag){
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



    validate(fieldName: PatternKeys,  value:string):boolean{
        if(fieldName!=='id'){
            let error='';
            (value.match(patterns[fieldName]))?error= '':(value==='')?error= fieldName.charAt(0).toUpperCase()+fieldName.slice(1)+' is required':error= 'Invalid '+ fieldName;
            
            let details=this.state.details;
            let errorMsgs = this.state.errorMgs;
            details[fieldName]=value;
            errorMsgs[fieldName]=error;
    
            (error!==this.state.errorMgs[fieldName])?(this.setState({details:details, errorMgs:errorMsgs})):this.setState({details:details});
            
            return (error!=='')?false:true
        }
       return true
        
    }
    updateContact(){
        if(this.props.contactDetails!==undefined){
            let contact:IContactInfo={
                id:this.props.contactDetails.id,
                ...this.state.details
            }
            this.props.onClick(contact,contact.id);
        }
    }

    
    

    addNewContact(){
        if(this.props.id!==undefined){
            let contact:IContactInfo = {
                id: this.props.id+1,
                ...this.state.details
            }
            this.props.onClick(contact,this.props.id+1);
        }
    }

    render(): React.ReactNode {
        return(
            <div className='addContactForm'>
            <div className='fieldsContainer'>
            <TextField errorMessage={this.state.errorMgs.name} onChange={(event,newValue)=>{this.validate('name',newValue as string)}} className='contactFormField' label='Name' required defaultValue={this.props.contactDetails?.name}/>
            <TextField errorMessage={this.state.errorMgs.email} onChange={(event,newValue)=>{this.validate('email',newValue as string)}} className='contactFormField' label='Email' required defaultValue={this.props.contactDetails?.email}/>
            <div className='row'>
                <TextField errorMessage={this.state.errorMgs.mobile} onChange={(event,newValue)=>{this.validate('email',newValue as string)}} className='contactFormField' label='Mobile' required defaultValue={this.props.contactDetails?.mobile}/>
                <TextField errorMessage={this.state.errorMgs.landline} onChange={(event,newValue)=>{this.validate('email',newValue as string)}} className='contactFormField' label='Landline' required defaultValue={this.props.contactDetails?.landline}/>
            </div>
            <TextField errorMessage={this.state.errorMgs.website} onChange={(event,newValue)=>{this.validate('email',newValue as string)}} className='contactFormField' label='Website' required defaultValue={this.props.contactDetails?.website}/>
            <TextField errorMessage={this.state.errorMgs.address} onChange={(event,newValue)=>{this.validate('email',newValue as string)}} className='contactFormField' label='Address' required defaultValue={this.props.contactDetails?.address} multiline rows={4} autoAdjustHeight/>
           </div>
           <div className='buttons'>
            {(!this.props.contactDetails)?<div className='rightChild'><Link to='/'><DefaultButton className='button' text='Cancel'/></Link></div>:<div className='rightChild'><DefaultButton className='button' text='Cancel' onClick={()=>this.props.onClick(this.props.contactDetails as IContactInfo,0,true)}/></div>}
            {(!this.props.contactDetails)?<div className='rightChild'><DefaultButton className='button submit' text='Add' onClick={this.formValidation}/></div>:<div className='rightChild'><DefaultButton className='button submit' text='Save' onClick={this.formValidation}/></div>}
           </div>
            {this.state.navigate && <Navigate to={'/'}/>}
           </div>
        );
    }
}