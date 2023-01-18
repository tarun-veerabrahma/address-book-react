import React, { useEffect, useState } from 'react';
import './contactsContainer.scss';
import ContactTile from '../contactTile/contactTile';
import { IContactsContainerProps, IContactsContainerState} from './IContactsContainer';
import { IContactInfo } from '../../../models/IContactInfo';

export default function ContactsContainer(props:IContactsContainerProps) {
    
    const [contacts,setContacts] = useState<IContactInfo[]>([]);
    const [selectedContactId,setSelectedContactId] = useState<number>(0);
    
    useEffect(()=>{
        setContacts(props.contacts); 
    },[props.contacts]);
    useEffect(()=>{
        if(props.newContactId){
            setSelectedContactId(props.newContactId);
        }
    },[props.newContactId]);
    
    const onClick=(key: number)=>{
        setSelectedContactId(key);
        props.onClick(key);
    }
        
    return (
        <div className='contactsPane'>
            <h3 className='contactsHeading'>Contacts</h3>
            <ul className='contacts'>
                {contacts.map((contact)=> <li key={contact.id}><ContactTile isSelected={contact.id===selectedContactId} {...contact} onClick={()=>{onClick(contact.id)}}/></li>
                )}
            </ul>
            
        </div>
    );
}