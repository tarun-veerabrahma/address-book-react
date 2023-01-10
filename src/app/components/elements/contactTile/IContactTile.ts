import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface IContactTileProps{
    name:string;
    email:string;
    mobile:string;
    isSelected:boolean;
    onClick:()=>void;
};

export interface IContactTileState{

};

