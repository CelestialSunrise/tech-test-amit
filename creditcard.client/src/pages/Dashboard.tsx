import React, { useState, useEffect } from 'react';
import { fetchDashboardData } from './DashboardData';
import CreditCardsComponent from '../components/CreditCardsComponent';
import CreditCardsByTypeComponent from "../components/CreditCardsByTypeComponent";
import CreditCardExpiringConponent from "../components/CreditCardExpiringConponent";
import { CreditCard } from '../types/CreditCard';

const Dashboard: React.FC = () => {
    const [dashboardData, setDashboardData] = useState<{
        creditCards: CreditCard[];
        cardTypes: { [key: string]: number };
        expiringCount: number | null;
    } | null>(null);

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchDashboardData();
            setDashboardData(data);
        };

        loadData();
    }, []);

    if (!dashboardData) {
        return <div>Loading...</div>;
    }

    return (
        <div>            
            <CreditCardsComponent creditCards={dashboardData.creditCards} />
            <CreditCardsByTypeComponent cardTypes={dashboardData.cardTypes} />
            <CreditCardExpiringConponent expiringCount={dashboardData.expiringCount} />
        </div>
    );
};

export default Dashboard;