import { fetchCreditCards, fetchCreditCardByType, fetchCreditCardCountExpiringAfter } from '../services/CreditCardService';

export const fetchDashboardData = async () => {
    const creditCards = await fetchCreditCards();
    const cardTypes = await fetchCreditCardByType();
    const expiringCount = await fetchCreditCardCountExpiringAfter('2027-01-01');

    return {
        creditCards,
        cardTypes,
        expiringCount,
    };
};
