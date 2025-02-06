import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreditCardsComponent from "./components/CreditCardsComponent";
import CreditCardsByTypeComponent from "./components/CreditCardsByTypeComponent";
import CreditCardExpiringConponent from "./components/CreditCardExpiringConponent";
import Dashboard from "./pages/Dashboard";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/credit-cards" element={<CreditCardsComponent creditCards={[]} />} />
                <Route path="/credit-cards-by-type" element={<CreditCardsByTypeComponent cardTypes={{}} />} />
                <Route path="/credit-card-cxpiring-count" element={<CreditCardExpiringConponent expiringCount={null} />} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
