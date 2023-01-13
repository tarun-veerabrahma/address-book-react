import React from 'react';
import { IContactDetailsProps, IContactDetailsState } from './IContactDetails';
import './contactDetails.scss';
import EditIcon from '../../../../media/icons/editIcon.jpg';
import DeleteIcon from '../../../../media/icons/deleteIcon.png';
import { emptyContactObject } from '../../../models/constants';

export default class ContactDetails extends React.Component<IContactDetailsProps,IContactDetailsState>{
    constructor(props:IContactDetailsProps){
		super(props);
		this.state = {
			contactToBeDisplayed:emptyContactObject
		}
	}
	static getDerivedStateFromProps(props:IContactDetailsProps,state:IContactDetailsState){
		if(props.contactToBeDisplayed && props.contactToBeDisplayed!==state.contactToBeDisplayed){
			return {
				contactToBeDisplayed:props.contactToBeDisplayed
			}
		}
		return null
	}
	render(): React.ReactNode {
        return (
            <div className="contactDetailsSection" id="contactDetailsSection">
				<div className="contactDetailsHeader">
					<div className="contactDetail"><span id="name" className="value">{this.props.contactToBeDisplayed.name}</span></div>
					<div className="options">
						<div id="editOption" className="option" onClick={this.props.onEditClicked}>
                            <img src={EditIcon} className='icon' alt='Edit Option Icon'/>
							<label>Edit</label>
						</div>
						<div id="deleteOption" className="option" onClick={this.props.onDeleteClicked}>
							<img src={DeleteIcon} className='icon' alt='Delete Option Icon'/>
							<label>Delete</label>
						</div>
					</div>
				</div>
				
				<div className="contactDetail">
					<label className="detailsSectionLabel">Email: </label>
					<span id="email" className="value">{this.props.contactToBeDisplayed.email}</span>
				</div>
				<div className="phone">
					<div className="contactDetail">
						<label className="detailsSectionLabel">Mobile: </label>
						<span id="mobile" className="value">{this.props.contactToBeDisplayed.mobile}</span>
					</div>
					<div className="contactDetail">
						<label className="detailsSectionLabel">Landline: </label>
						<span id="landline" className="value">{this.props.contactToBeDisplayed.landline}</span>
					</div>
				</div>
				<div className="contactDetail">
					<label className="detailsSectionLabel">Website: </label>
					<span id="website" className="value">{this.props.contactToBeDisplayed.website}</span>
				</div>
				<div className="contactDetail">
					<label className="detailsSectionLabel">Address: </label>
					<div><span id="address" className="address value">{this.props.contactToBeDisplayed.address}</span></div>
				</div>
            </div>
        );
    }
}