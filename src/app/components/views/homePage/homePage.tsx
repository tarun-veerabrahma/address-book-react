import React, { useState } from 'react';
import ContactsContainer from '../../elements/contactsContainer/contactsContainer';
import './home.scss'
import AddContact from '../../elements/contactForm/contactForm';
import {IHomePageProps,IHomePageState} from './IHomePage';
import { IContactInfo } from '../../../models/IContactInfo';
import ContactDetails from '../../elements/contactDetails/contactDetails';
export default function Home(props:IHomePageProps){
    const [contacts,setContacts]=useState<IContactInfo[]>([]);
    const [uniqueId,setUniqueId] = useState<number>(0);
    const [selectedContactId,setSelectedContactId] = useState<number|undefined>();
    const [isEditClicked,setIsEditClicked] = useState<boolean>(false);
    
    const addContact=(data: IContactInfo,Id:number)=>{
        let tempContacts = contacts;//creating a copy for maintaining immutability
        contacts.push(data);
        setContacts(tempContacts);
        setUniqueId(Id);
        setSelectedContactId(Id);
    }

    const displayContactDetails=(id: number)=>{
        setUniqueId(id);
    }

    const handleEdit=()=>{
        setIsEditClicked(true);
    }
    const checkId=(contact:IContactInfo,index:number)=>{
        if(contact.id === selectedContactId){
            setContactDetails(index);
            return false
        }
        return true
    }
    const deleteContact=()=>{
        let tempContacts=contacts.filter(checkId);
        setContacts(tempContacts);
    }
    const setContactDetails=(i:number)=>{
        if(contacts.length === 1){
            setSelectedContactId(undefined);
        }
        else{
            if(i>=contacts.length - 1){
                i = contacts.length - 2;
            }
            setSelectedContactId(contacts[i].id);
        } 
    }

    const updateContact=(data:IContactInfo, Id:number, cancel?:boolean)=>{
        if(cancel){
            setIsEditClicked(false);
        }
        else{
            setContacts(contacts.map((contact)=>{
                if(contact.id===Id){
                    return data
                }
                return contact
            }));
            setIsEditClicked(false);
        }
        
    }



    let contact = contacts.filter((contact)=>{
        return contact.id === selectedContactId
    })[0]
    return(
        <div className='home'>
            <ContactsContainer newContactId={(selectedContactId!==undefined)?selectedContactId:0} contacts={contacts} onClick = {displayContactDetails}/>
            <div className='rightSection'>
                {(contact)&&<ContactDetails contactToBeDisplayed={contact} onEditClicked={handleEdit} onDeleteClicked={deleteContact}/>}
                {(isEditClicked)?<AddContact onClick = {updateContact} contactDetails={contact}/>:(props.addIsClicked !== undefined) && <AddContact id={uniqueId} onClick = {addContact}/>}
            </div>
        </div>
    );
}