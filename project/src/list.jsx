import React from 'react';
import './list.css';

export const List = ({info}) => {
    return (
        <div className="list">
           {info.title}
        </div>

    )
}