import React from 'react';
import { CreditCard } from '../types/CreditCard';

interface CreditCardsComponentProps {
    creditCards: CreditCard[];
}

const CreditCardsComponent: React.FC<CreditCardsComponentProps> = ({ creditCards }) => {
    return (

        <div>
            <h1 className="mb-4">Credit Cards</h1>

            <div className="d-flex flex-row justify-content-between text-start m-1 ">
                <div className="text-start py-2   border-bottom m-2 fw-bold col-1">No</div>
                <div className="text-start py-2   border-bottom m-2 fw-bold col-4">Card Number</div>
                <div className="text-start py-2   border-bottom m-2 fw-bold col-5">Type</div>
                <div className="text-start py-2   border-bottom m-2 fw-bold col-2">Expiry Date</div>
            </div>

            {creditCards.map((card, index) => (
                <div key={card.number} className="d-flex m-1 flex-row justify-content-between text-start">
                    <div className="text-start py-2  border-bottom m-2 col-1">{index + 1}</div>
                    <div className="text-start py-2  border-bottom m-2 col-4">{card.number}</div>
                    <div className="text-start py-2  border-bottom m-2 col-5">{card.type}</div>
                    <div className="text-start py-2  border-bottom m-2 col-2">{card.expiryDate}</div>
                </div>
            ))}

        </div>
        //<div className="container-fluid mt-4">
        //    <h1 className="mb-3">Credit Cards</h1>

        //    <div className="d-flex flex-row border-bottom fw-bold py-2 text-center">
        //        <div className="p-2 col-1 text-start justify-content-center">No</div>
        //        <div className="p-2 col-4 text-start justify-content-center">Card Number</div>
        //        <div className="p-2 col-4 text-start justify-content-center">Type</div>
        //        <div className="p-2 col-3 text-start justify-content-center">Expiry Date</div>
        //    </div>

        //    {creditCards.map((card, index) => (
        //        <div key={card.number} className="d-flex flex-row border-bottom py-2 text-center">
        //            <div className="p-2 col-1 text-start justify-content-center">{index + 1}</div>
        //            <div className="p-2 col-4 text-start justify-content-center">{card.number}</div>
        //            <div className="p-2 col-4 text-start justify-content-center">{card.type}</div>
        //            <div className="p-2 col-3 text-start justify-content-center">{card.expiryDate}</div>
        //        </div>
        //    ))}

        //</div>
    );
};

export default CreditCardsComponent;