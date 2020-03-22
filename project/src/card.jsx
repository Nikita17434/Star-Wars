import React from 'react';
import './card.css';

export const Card = ({ film }) => {
    return(
        <div className="card">
            <div className="title">
                <span className="span">Title:</span>
                {film.title}
            </div>
            <div className="episode">
                <span className="span">Episode:</span>
                {film.episode_id}
            </div>
            <div className="text">
                <span className="span">Description:</span>
                {film.opening_crawl}
            </div>
            <div className="director">
                <span className="span">Director:</span>
                {film.director}
            </div>
            <div className="producer">
                <span className="span">Producer:</span>
                {film.producer}
            </div>
            <div className="release">
                <span className="span">release date:</span>
                {film.release_date}
            </div>

        </div>
    )
}