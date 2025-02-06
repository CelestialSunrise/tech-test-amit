import React from 'react';

interface CredCardTypeComponentProps {
    cardTypes: { [key: string]: number };
}

const CredCardTypeComponent: React.FC<CredCardTypeComponentProps> = ({ cardTypes }) => {
    return (
        <div className="container-fluid mt-4">
            <h1 className="mb-3">Credit Card Count by Type</h1>

            <div className="d-flex flex-row border-bottom fw-bold py-2 text-center">
                <div className="p-2 col-6 text-start">Type</div>
                <div className="p-2 col-6 text-start">Count</div>
            </div>

            {Object.entries(cardTypes).map(([type, count], index) => (
                <div key={index} className="d-flex flex-row border-bottom py-2 text-center">
                    <div className="p-2 col-6 text-start">{type}</div>
                    <div className="p-2 col-6 text-start">{count}</div>
                </div>
            ))}
        </div>
    );
};

export default CredCardTypeComponent;
