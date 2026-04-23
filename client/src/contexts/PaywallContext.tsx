import React, { createContext, useContext, useState, useEffect } from 'react';

interface PaywallContextType {
  isPremium: boolean;
  setPremium: (value: boolean) => void;
  initiatePayment: (service: string, amount: number) => void;
}

const PaywallContext = createContext<PaywallContextType | undefined>(undefined);

export function PaywallProvider({ children }: { children: React.ReactNode }) {
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('premium_user');
    if (stored === 'true') {
      setIsPremium(true);
    }
  }, []);

  const setPremium = (value: boolean) => {
    setIsPremium(value);
    localStorage.setItem('premium_user', value ? 'true' : 'false');
  };

  const initiatePayment = (service: string, amount: number) => {
    const paymentData = {
      service,
      amount,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('pending_payment', JSON.stringify(paymentData));
    window.location.href = `/payment?service=${service}&amount=${amount}`;
  };

  return (
    <PaywallContext.Provider value={{ isPremium, setPremium, initiatePayment }}>
      {children}
    </PaywallContext.Provider>
  );
}

export function usePaywall() {
  const context = useContext(PaywallContext);
  if (!context) {
    throw new Error('usePaywall must be used within PaywallProvider');
  }
  return context;
}
