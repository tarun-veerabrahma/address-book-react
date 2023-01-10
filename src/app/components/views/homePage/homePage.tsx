import React from 'react';
import ContactsContainer from '../../elements/contactsContainer/contactsContainer';
import '../../../../styles/home.css'
import AddContact from '../../elements/contactForm/contactForm';
import {IHomePageProps,IHomePageState, Contact} from './IHomePage';
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
    }
    
    addContact(data: Contact,Id:number){
        let contacts = this.state.contacts;
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

    deleteContact(){
        let id = this.state.selectedContactId;
        let contacts = this.state.contacts;

        // contacts.filter((contact)=>{
        //     return contact.id !== id
        // })
        for(let i=0;i<contacts.length;i++){
            if(contacts[i].id === id){
                contacts.splice(i,1);
                this.setContactDetails(i);
                break;
            }
        }
        this.setState({
            contacts:contacts
            
        })
        
    }
    

    setContactDetails(i:number){
        if(this.state.contacts.length === 0){
            this.setState({
                selectedContactId:undefined
            })
        }
        else if(i>=this.state.contacts.length){
            i = this.state.contacts.length - 1;
        }
        this.setState({
            selectedContactId:this.state.contacts[i].id
        })
    }

    updateContact(data:Contact, Id:number){
        let contacts = this.state.contacts;
        // contacts.map((contact)=>{
        //     if(contact.id===Id){
        //         return data
        //     }
        //     return contact
        // })
        for(let i=0;i<contacts.length;i++){
            if(contacts[i].id===Id){
                contacts[i]=data;
                break;
            }
        }
        this.setState({
            contacts:contacts,
            isEditClicked:false
        })
    }


    render(): React.ReactNode {
        let contact = this.state.contacts.filter((contact)=>{
            return contact.id === this.state.selectedContactId
        })[0]
        return(
            <div className='home'>
                <ContactsContainer newContactId={(this.state.selectedContactId!==undefined)?this.state.selectedContactId:0} contacts={this.state.contacts} onClick = {(id)=>{this.displayContactDetails(id)}}/>
                <div className='rightSection'>
                    {(this.state.selectedContactId !== undefined)&&<ContactDetails name={contact.name} 
                        email={contact.email}
                        mobile={contact.mobile}
                        landline={contact.landline}
                        website={contact.website}
                        address={contact.address} onEditClicked={()=>{this.handleEdit()}} onDeleteClicked={()=>{this.deleteContact()}}/>}
                    {(this.state.isEditClicked)?<AddContact onClick = {(data:Contact,Id:number)=>{this.updateContact(data,Id) }} contactDetails={contact}/>:(this.props.addIsClicked !== undefined) && <AddContact id={this.state.uniqueId} onClick = {(data:Contact,Id:number)=>{this.addContact(data,Id)}}/>}
                </div>
            </div>
        );
    }
}