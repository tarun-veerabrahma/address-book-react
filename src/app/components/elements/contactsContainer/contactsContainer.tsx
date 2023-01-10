import React from 'react';
import '../../../../styles/contactsContainer.css';
import ContactTile from '../contactTile/contactTile';

import { IContactsContainerProps, IContactsContainerState} from './IContactsContainer';
import { Contact } from '../../views/homePage/IHomePage';
import { Navigate } from 'react-router-dom';


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
        let contacts:Contact[] = this.state.contacts;
        let tiles:JSX.Element[] = [];
        if(contacts.length!==0){
            for(let i=0;i<contacts.length;i++){
                tiles.push(<li key={contacts[i].id}><ContactTile isSelected={(contacts[i].id===this.state.selectedContactId)?true:false} name={contacts[i].name} email={contacts[i].email} mobile={contacts[i].mobile} onClick={()=>{this.onClick(contacts[i].id)}}/></li>)
            }
        }
            return (
                <div className='contactsPane'>
                    <h3 className='contactsHeading'>Contacts</h3>
                    <ul className='contacts'>
                        {tiles}
                    </ul>
                    
                </div>
            );
    }
}