export const fetchCreditCards = async () => {
    const response = await fetch("https://localhost:7087/api/CreditCard/get-cards");
    if (!response.ok) {
        throw new Error("Failed to fetch credit cards");
    }
    return response.json();
};

export const fetchCreditCardByType = async () => {
    const response = await fetch("https://localhost:7087/api/CreditCard/card-by-type");
    if (!response.ok) {
        throw new Error("Failed to fetch credit cards by types");
    }
    return response.json();
};

export const fetchCreditCardCountExpiringAfter = async (date: string) => {
    const response = await fetch(`https://localhost:7087/api/CreditCard/count-expiring-after/${encodeURIComponent(date)}`);
    if (!response.ok) {
        throw new Error("Failed to count card which are not expired after specific date");
    }
    return response.json();
};
