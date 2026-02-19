/**
 * AssurMyBike - Pricing Simulator (Quote)
 * 
 * Allows users to calculate their insurance premium in real-time.
 * Uses `pricing.js` utility for logic.
 * 
 * @module Quote
 * @author AssurMyBike Team
 */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { calculatePremium } from '../utils/pricing';

const Quote = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        bikeValue: '',
        purchaseDate: ''
    });

    const [quote, setQuote] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCalculate = (e) => {
        e.preventDefault();
        const result = calculatePremium(formData.bikeValue, formData.purchaseDate);
        setQuote(result);
    };

    const handleSubscribe = () => {
        if (quote) {
            // Pass data to subscription page
            navigate('/subscription', { state: { ...formData, quote } });
        }
    };

    return (
        <Layout>
            <div className="container" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div className="glass-card animate-fade-in">
                        <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)', color: 'var(--primary-color)' }}>
                            {t('quote.title')}
                        </h2>

                        <form onSubmit={handleCalculate} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>{t('quote.bikeValue')}</label>
                                <input
                                    type="number"
                                    name="bikeValue"
                                    value={formData.bikeValue}
                                    onChange={handleInputChange}
                                    required
                                    min="100"
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid #ddd',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>{t('quote.purchaseDate')}</label>
                                <input
                                    type="date"
                                    name="purchaseDate"
                                    value={formData.purchaseDate}
                                    onChange={handleInputChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid #ddd',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ marginTop: 'var(--spacing-md)' }}>
                                {t('quote.calculate')}
                            </button>
                        </form>

                        {quote && (
                            <div className="animate-fade-in" style={{
                                marginTop: 'var(--spacing-lg)',
                                padding: 'var(--spacing-md)',
                                background: 'rgba(4, 212, 133, 0.1)',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--primary-color)',
                                textAlign: 'center'
                            }}>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>Votre tarif estimé :</p>
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--secondary-color)', margin: '10px 0' }}>
                                    {quote.monthly}€ <span style={{ fontSize: '1rem', fontWeight: 'normal' }}>/ {t('quote.monthly')}</span>
                                </div>
                                <div style={{ fontSize: '0.9rem', marginBottom: 'var(--spacing-md)', color: '#666' }}>
                                    Soit {quote.annual}€ / {t('quote.year')}
                                </div>

                                <button onClick={handleSubscribe} className="btn btn-primary" style={{ width: '100%', backgroundColor: 'var(--secondary-color)', boxShadow: 'none' }}>
                                    {t('quote.subscribe')}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Quote;
