import React from 'react';
import {IContactTileProps, IContactTileState} from './IContactTile';
import './contactTile.scss';

export default function ContactTile(props:IContactTileProps){
    return (
            <div className={(props.isSelected)?"contactTile active":"contactTile"} onClick={props.onClick}>
                <div className="tooltip">
                    <span className="contactDetail name">{props.name}</span>
                    <span className="tooltipText">{props.name}</span>
                </div>
                <div className="details">
                    <div className="tooltip">
                        <span className="contactDetail email">{props.email}</span>
                        <span className="tooltipText">{props.email}</span>
                    </div>
                    <span className="contactDetail mobile">{props.mobile}</span>
                </div>
            </div>
        
    )
}