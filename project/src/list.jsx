import React from 'react';
import './list.css';
import { Card } from './card';

export const List = ({ info }) => {
    return (
        <div className="list">
           { info?.results && 
           info.results.map(x => <Card key={x.title} film={x} />)}
        </div>

    )
}