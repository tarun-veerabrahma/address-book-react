import { DefaultButton, TextField } from '@fluentui/react';
import './contactForm.scss'
import React, { useEffect, useState } from 'react';
import { IContactDetails, PatternKeys} from '../../../models/IContactInfo';
import { Link, Navigate } from 'react-router-dom';
import { IContactFormProps,IContactFormState } from './IContactForm';
import { patterns} from '../../../models/constants';
import { IContactInfo } from '../../../models/IContactInfo';
import { emptyDetails } from '../../../models/constants';
export default function AddContact(props:IContactFormProps){
    
    
    // constructor(props:IContactFormProps){
    //     super(props);
    //     this.state = {
    //         details:{
    //             name:"",
    //             email:"",
    //             mobile:"",
    //             landline:"",
    //             website:"",
    //             address:""
    //         },
    //         navigate:false,
    //         errorMgs:{
    //             name:"",
    //             email:"",
    //             mobile:"",
    //             landline:"",
    //             website:"",
    //             address:""
    //         }
    //     }
    //     this.formValidation = this.formValidation.bind(this)
    // }
    const [details,setDetails] = useState<IContactDetails>(emptyDetails);
    const [navigate,setNavigate] = useState<boolean>(false);
    const [errorMsgs,setErrorMsgs] = useState<IContactDetails>({
                    name:"",
                    email:"",
                    mobile:"",
                    landline:"",
                    website:"",
                    address:""
                });
    
    useEffect(()=>{
        if(props.contactDetails){
            setDetails(props.contactDetails);
        }   
    },[props.contactDetails]);

    // componentDidMount(): void {
    //     if(this.props.contactDetails){
    //         this.setState({
    //             details:this.props.contactDetails
    //         })
    //     }
    // }

    const formValidation=()=>{
        let flag=true;
        (Object.keys(details) as PatternKeys[]).forEach((key)=>{if(key!=='id'){if(flag){flag=validate(key,details[key])}else{validate(key,details[key])}}})
        
        if(flag){
            if(props.contactDetails!==undefined){
                updateContact();
            }
            else{
                addNewContact();
                setNavigate(true);
            }
        }
    }



    const validate = (fieldName: PatternKeys,  value:string):boolean=>{
        if(fieldName!=='id'){
            let error='';
            (value.match(patterns[fieldName]))?error= '':(value==='')?error= fieldName.charAt(0).toUpperCase()+fieldName.slice(1)+' is required':error= 'Invalid '+ fieldName;
            
            let tempDetails={...details};
            let tempErrorMsgs = {...errorMsgs};
            tempDetails[fieldName]=value;
            tempErrorMsgs[fieldName]=error;
    
            setDetails(tempDetails); 
            setErrorMsgs(tempErrorMsgs);
            
            return (error!=='')?false:true
        }
       return true
        
    }
    const updateContact=()=>{
        if(props.contactDetails!==undefined){
            let contact:IContactInfo={
                id:props.contactDetails.id,
                ...details
            }
            props.onClick(contact,contact.id);
        }
    }

    
    

    const addNewContact=()=>{
        if(props.id!==undefined){
            let contact:IContactInfo = {
                id: props.id+1,
                ...details
            }
            props.onClick(contact,props.id+1);
        }
    }

    return(
        <div className='addContactForm'>
        <div className='fieldsContainer'>
        <TextField errorMessage={errorMsgs.name} onChange={(event,newValue)=>{validate('name',newValue as string)}} className='contactFormField' label='Name' required defaultValue={props.contactDetails?.name}/>
        <TextField errorMessage={errorMsgs.email} onChange={(event,newValue)=>{validate('email',newValue as string)}} className='contactFormField' label='Email' required defaultValue={props.contactDetails?.email}/>
        <div className='row'>
            <TextField errorMessage={errorMsgs.mobile} onChange={(event,newValue)=>{validate('mobile',newValue as string)}} className='contactFormField' label='Mobile' required defaultValue={props.contactDetails?.mobile}/>
            <TextField errorMessage={errorMsgs.landline} onChange={(event,newValue)=>{validate('landline',newValue as string)}} className='contactFormField' label='Landline' required defaultValue={props.contactDetails?.landline}/>
        </div>
        <TextField errorMessage={errorMsgs.website} onChange={(event,newValue)=>{validate('website',newValue as string)}} className='contactFormField' label='Website' required defaultValue={props.contactDetails?.website}/>
        <TextField errorMessage={errorMsgs.address} onChange={(event,newValue)=>{validate('address',newValue as string)}} className='contactFormField' label='Address' required defaultValue={props.contactDetails?.address} multiline rows={4} autoAdjustHeight/>
        </div>
        <div className='buttons'>
        {(!props.contactDetails)?<div className='rightChild'><Link to='/'><DefaultButton className='button' text='Cancel'/></Link></div>:<div className='rightChild'><DefaultButton className='button' text='Cancel' onClick={()=>props.onClick(props.contactDetails as IContactInfo,0,true)}/></div>}
        {(!props.contactDetails)?<div className='rightChild'><DefaultButton className='button submit' text='Add' onClick={formValidation}/></div>:<div className='rightChild'><DefaultButton className='button submit' text='Save' onClick={formValidation}/></div>}
        </div>
        {navigate && <Navigate to={'/'}/>}
        </div>
    );
}