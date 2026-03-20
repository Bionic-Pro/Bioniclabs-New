export const trackConversion = (value: number = 1.0, currency: string = 'RON') => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const transactionId = `txn_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-18020149996/btD4CMenzYkcEOzV1pBD',
      'value': value,
      'currency': currency,
      'transaction_id': transactionId
    });
  }
};
