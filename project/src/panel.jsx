import React from 'react';
import {ReactComponent as Icon} from './assets/logo.svg';

import './panel.css';

export const Panel = ({currentPage, setCurrentPage}) => {
    return (
        <div className="panel">
            <Icon width="400"></Icon>
            <div className="pages">
                <div className={`page ${currentPage === 0 ? ' active' : ''}`} onClick={() => setCurrentPage(0)}>Films</div>
                <div className={`page ${currentPage === 1 ? ' active' : ''}`} onClick={() => setCurrentPage(1)}>Actors</div>
                <div className={`page ${currentPage === 2 ? ' active' : ''}`} onClick={() => setCurrentPage(2)}>Heroes</div>
        </div>
    </div>
    )
}