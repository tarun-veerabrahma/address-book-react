import React from 'react';
import {IContactTileProps, IContactTileState} from './IContactTile';
import './contactTile.scss';

export default class ContactTile extends React.Component<IContactTileProps,IContactTileState>{
    render(): React.ReactNode {
        return (
                <div className={(this.props.isSelected)?"contactTile active":"contactTile"} onClick={this.props.onClick}>
                    <div className="tooltip">
                        <span className="contactDetail name">{this.props.name}</span>
                        <span className="tooltipText">{this.props.name}</span>
                    </div>
                    <div className="details">
                        <div className="tooltip">
                            <span className="contactDetail email">{this.props.email}</span>
                            <span className="tooltipText">{this.props.email}</span>
                        </div>
                        <span className="contactDetail mobile">{this.props.mobile}</span>
                    </div>
                </div>
            
        )
    }
}