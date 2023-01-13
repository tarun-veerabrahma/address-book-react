import React from 'react';
import ContactsContainer from '../../elements/contactsContainer/contactsContainer';
import './home.scss'
import AddContact from '../../elements/contactForm/contactForm';
import {IHomePageProps,IHomePageState} from './IHomePage';
import { IContactInfo } from '../../../models/IContactInfo';
import ContactDetails from '../../elements/contactDetails/contactDetails';
export default class Home extends React.Component<IHomePageProps,IHomePageState>{
    constructor(props:IHomePageProps){
        super(props);
        this.state={
            contacts:[],
            uniqueId:0,
            selectedContactId:undefined,
            isEditClicked: false
        }
        this.checkId = this.checkId.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.deleteContact = this.deleteContact.bind(this)
        this.addContact = this.addContact.bind(this)
        this.updateContact = this.updateContact.bind(this)
        this.displayContactDetails = this.displayContactDetails.bind(this)
    }
    
    addContact(data: IContactInfo,Id:number){
        let contacts = this.state.contacts;//creating a copy for maintaining immutability
        contacts.push(data);
        this.setState({
            contacts:contacts,
            uniqueId:Id,
            selectedContactId:Id
        })
    }

    displayContactDetails(id: number){
        
        this.setState({
            selectedContactId:id
        })
    }

    handleEdit(){
        this.setState({
            isEditClicked:true
        })
    }
    checkId(contact:IContactInfo,index:number){
        if(contact.id === this.state.selectedContactId){
            this.setContactDetails(index);
            return false
        }
        return true
    }
    deleteContact(){
        this.setState({
            contacts:this.state.contacts.filter(this.checkId)
             
        })
        
    }
    setContactDetails(i:number){
        if(this.state.contacts.length === 1){
            this.setState({
                selectedContactId:undefined
            })
        }
        else{
            if(i>=this.state.contacts.length - 1){
                i = this.state.contacts.length - 2;
            }
            this.setState({
                selectedContactId:this.state.contacts[i].id
            })
        } 
    }

    updateContact(data:IContactInfo, Id:number, cancel?:boolean){
        if(cancel){
            this.setState({
                isEditClicked:false
            })
        }
        else{
            this.setState({
                contacts:this.state.contacts.map((contact)=>{
                    if(contact.id===Id){
                        return data
                    }
                    return contact
                }),
                isEditClicked:false
            })
        }
        
    }


    render(): React.ReactNode {
        let contact = this.state.contacts.filter((contact)=>{
            return contact.id === this.state.selectedContactId
        })[0]
        return(
            <div className='home'>
                <ContactsContainer newContactId={(this.state.selectedContactId!==undefined)?this.state.selectedContactId:0} contacts={this.state.contacts} onClick = {this.displayContactDetails}/>
                <div className='rightSection'>
                    {(this.state.selectedContactId)&&<ContactDetails contactToBeDisplayed={contact} onEditClicked={this.handleEdit} onDeleteClicked={this.deleteContact}/>}
                    {(this.state.isEditClicked)?<AddContact onClick = {this.updateContact} contactDetails={contact}/>:(this.props.addIsClicked !== undefined) && <AddContact id={this.state.uniqueId} onClick = {this.addContact}/>}
                </div>
            </div>
        );
    }
}