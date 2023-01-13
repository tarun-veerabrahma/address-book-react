import React from 'react';
import './contactsContainer.scss';
import ContactTile from '../contactTile/contactTile';
import { IContactsContainerProps, IContactsContainerState} from './IContactsContainer';


export default class ContactsContainer extends React.Component<IContactsContainerProps, IContactsContainerState>{
    
    constructor(props:IContactsContainerProps){
        super(props);
        this.state = {
            contacts:[],
            selectedContactId:0,
            id:0
        }
    }
    static getDerivedStateFromProps(props:IContactsContainerProps, state:IContactsContainerState){
        if(props.contacts!==state.contacts || props.newContactId!==state.selectedContactId){
            return{
                contacts:props.contacts,
                selectedContactId:props.newContactId
            }
        }
        return null;
    }
    onClick(key: number){
        this.setState({
            selectedContactId:key
        })
        this.props.onClick(key);
    }
    render(): React.ReactNode {
        
        return (
            <div className='contactsPane'>
                <h3 className='contactsHeading'>Contacts</h3>
                <ul className='contacts'>
                    {this.state.contacts.map((contact)=>{
                        return <li key={contact.id}><ContactTile isSelected={contact.id===this.state.selectedContactId} {...contact} onClick={()=>{this.onClick(contact.id)}}/></li>
                    })}
                </ul>
                
            </div>
        );
    }
}