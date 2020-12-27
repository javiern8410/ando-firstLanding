import React from 'react';
import './offer-card.scss';

const OfferCard: React.FunctionComponent<any> = ({ cardData }) => {

    return (
        <div className="card">
            <i className={`fa ${cardData.icon} fa-5x`} aria-hidden="true" />
            <h3>
                {cardData.title}
            </h3>
            <p>
                {cardData.text}
            </p>
        </div>
    );
};

export default OfferCard;