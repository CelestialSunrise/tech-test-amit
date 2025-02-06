import React from 'react';

interface CreditCardExpiryComponentProps {
    expiringCount: number | null;
}

const CreditCardExpiringConponent: React.FC<CreditCardExpiryComponentProps> = ({ expiringCount }) => {
    return (
        <div className="container-fluid mt-4">
            <h1 className="mb-3">Expiring Credit Cards</h1>
            <p className="fs-5">
                Number of credit cards expiring after <strong>1st January 2027</strong>: <span className="fw-bold">{expiringCount}</span>
            </p>
        </div>
    );
};

export default CreditCardExpiringConponent;
