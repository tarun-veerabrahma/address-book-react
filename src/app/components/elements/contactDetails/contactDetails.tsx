import React from 'react';
import { IContactDetailsProps, IContactDetailsState } from './IContactDetails';
import '../../../../styles/contactDetails.css';
import EditIcon from '../../../../media/icons/editIcon.jpg';
import DeleteIcon from '../../../../media/icons/deleteIcon.png';

export default class ContactDetails extends React.Component<IContactDetailsProps,IContactDetailsState>{
    constructor(props:IContactDetailsProps){
		super(props);
		this.state = {
			name:"",
            email:"",
            mobile:"",
            landline:"",
            website:"",
            address:""
		}
	}

	componentDidMount(): void {
		this.setState({
			name:this.props.name,
			email:this.props.email,
			mobile:this.props.mobile,
			landline:this.props.landline,
			website:this.props.website,
			address:this.props.address
		})
	}
	
	render(): React.ReactNode {
        return (
            <div className="contactDetailsSection" id="contactDetailsSection">
				<div className="contactDetailsHeader">
					<div className="contactDetail"><span id="name" className="value">{this.props.name}</span></div>
					<div className="options">
						<div id="editOption" className="option" onClick={()=>this.props.onEditClicked()}>
                            <img src={EditIcon} className='icon' alt='Edit Option Icon'/>
							<label>Edit</label>
						</div>
						<div id="deleteOption" className="option" onClick={()=>this.props.onDeleteClicked()}>
							<img src={DeleteIcon} className='icon' alt='Delete Option Icon'/>
							<label>Delete</label>
						</div>
					</div>
				</div>
				
				<div className="contactDetail">
					<label className="detailsSectionLabel">Email: </label>
					<span id="email" className="value">{this.props.email}</span>
				</div>
				<div className="phone">
					<div className="contactDetail">
						<label className="detailsSectionLabel">Mobile: </label>
						<span id="mobile" className="value">{this.props.mobile}</span>
					</div>
					<div className="contactDetail">
						<label className="detailsSectionLabel">Landline: </label>
						<span id="landline" className="value">{this.props.landline}</span>
					</div>
				</div>
				<div className="contactDetail">
					<label className="detailsSectionLabel">Website: </label>
					<span id="website" className="value">{this.props.website}</span>
				</div>
				<div className="contactDetail">
					<label className="detailsSectionLabel">Address: </label>
					<div><span id="address" className="address value">{this.props.address}</span></div>
				</div>
            </div>
        );
    }
}