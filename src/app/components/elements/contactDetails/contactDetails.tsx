import React, { useEffect, useState } from 'react';
import { IContactDetailsProps, IContactDetailsState } from './IContactDetails';
import './contactDetails.scss';
import EditIcon from '../../../../media/icons/editIcon.jpg';
import DeleteIcon from '../../../../media/icons/deleteIcon.png';
import { emptyContactObject } from '../../../models/constants';
import { IContactDetails } from "../../../models/IContactInfo";

export default function ContactDetails(props:IContactDetailsProps){
    // constructor(props:IContactDetailsProps){
	// 	super(props);
	// 	this.state = {
	// 		contactToBeDisplayed:emptyContactObject
	// 	}
	// }
	const [contactToBeDisplayed,setContactToBeDisplayed] = useState<IContactDetails>(emptyContactObject);
	useEffect(()=>{
		if(props.contactToBeDisplayed){
			setContactToBeDisplayed(props.contactToBeDisplayed)
		}
		
	},[props.contactToBeDisplayed])

	// static getDerivedStateFromProps(props:IContactDetailsProps,state:IContactDetailsState){
	// 	if(props.contactToBeDisplayed && props.contactToBeDisplayed!==state.contactToBeDisplayed){
	// 		return {
	// 			contactToBeDisplayed:props.contactToBeDisplayed
	// 		}
	// 	}
	// 	return null
	// }
	return (
		<div className="contactDetailsSection" id="contactDetailsSection">
			<div className="contactDetailsHeader">
				<div className="contactDetail"><span id="name" className="value">{props.contactToBeDisplayed.name}</span></div>
				<div className="options">
					<div id="editOption" className="option" onClick={props.onEditClicked}>
						<img src={EditIcon} className='icon' alt='Edit Option Icon'/>
						<label>Edit</label>
					</div>
					<div id="deleteOption" className="option" onClick={props.onDeleteClicked}>
						<img src={DeleteIcon} className='icon' alt='Delete Option Icon'/>
						<label>Delete</label>
					</div>
				</div>
			</div>
			
			<div className="contactDetail">
				<label className="detailsSectionLabel">Email: </label>
				<span id="email" className="value">{props.contactToBeDisplayed.email}</span>
			</div>
			<div className="phone">
				<div className="contactDetail">
					<label className="detailsSectionLabel">Mobile: </label>
					<span id="mobile" className="value">{props.contactToBeDisplayed.mobile}</span>
				</div>
				<div className="contactDetail">
					<label className="detailsSectionLabel">Landline: </label>
					<span id="landline" className="value">{props.contactToBeDisplayed.landline}</span>
				</div>
			</div>
			<div className="contactDetail">
				<label className="detailsSectionLabel">Website: </label>
				<span id="website" className="value">{props.contactToBeDisplayed.website}</span>
			</div>
			<div className="contactDetail">
				<label className="detailsSectionLabel">Address: </label>
				<div><span id="address" className="address value">{props.contactToBeDisplayed.address}</span></div>
			</div>
		</div>
	);
}