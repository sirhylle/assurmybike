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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCalculate = (e) => {
        e.preventDefault();
        const result = calculatePremium(formData.bikeValue, formData.purchaseDate);
        setQuote(result);
    };

    const handleSubscribe = () => {
        if (quote) {
            navigate('/subscription', { state: { ...formData, quote } });
        }
    };

    return (
        <Layout>
            <div className="container" style={{ padding: '40px 20px', maxWidth: '1000px' }}>
                <h1 className="animate-fade-in" style={{
                    textAlign: 'center',
                    marginBottom: 'var(--spacing-xl)',
                    color: 'var(--secondary-color)',
                    fontSize: '2.5rem'
                }}>
                    {t('quote.title')}
                </h1>

                <div className="grid-layout animate-fade-in" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '40px',
                    alignItems: 'start'
                }}>
                    {/* Calculator Form */}
                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <h3 style={{ marginBottom: '1.5rem', color: '#64748b' }}>Paramétrez votre assurance</h3>
                        <form onSubmit={handleCalculate} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="form-group">
                                <label style={labelStyle}>{t('quote.bikeValueLabel')}</label>
                                <div style={{ position: 'relative' }}>
                                    <input
                                        type="number"
                                        name="bikeValue"
                                        value={formData.bikeValue}
                                        onChange={handleChange}
                                        placeholder="Ex: 2500"
                                        style={inputStyle}
                                        required
                                        min="100"
                                    />
                                    <span style={{ position: 'absolute', right: '15px', top: '12px', color: '#999' }}>€</span>
                                </div>
                            </div>

                            <div className="form-group">
                                <label style={labelStyle}>{t('quote.purchaseDateLabel')}</label>
                                <input
                                    type="date"
                                    name="purchaseDate"
                                    value={formData.purchaseDate}
                                    onChange={handleChange}
                                    style={inputStyle}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                                {t('quote.calculateButton')}
                            </button>
                        </form>
                    </div>

                    {/* Result Card */}
                    <div className="glass-card" style={{
                        padding: '2rem',
                        background: quote ? 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)' : '#f8fafc',
                        border: quote ? '2px solid var(--primary-color)' : '2px solid transparent',
                        transition: 'all 0.3s ease',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        minHeight: '300px'
                    }}>
                        {!quote ? (
                            <div style={{ color: '#94a3b8' }}>
                                <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>⚡</span>
                                <p>Remplissez le formulaire pour voir votre tarif.</p>
                            </div>
                        ) : (
                            <div className="animate-fade-in">
                                <h3 style={{ color: '#64748b', marginBottom: '1rem' }}>Votre tarif estimé</h3>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <span style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--primary-color)' }}>
                                        {quote.monthly}€
                                    </span>
                                    <span style={{ color: '#64748b', fontSize: '1.1rem' }}> / mois</span>
                                </div>
                                <div style={{
                                    background: 'rgba(4, 212, 133, 0.1)',
                                    padding: '10px',
                                    borderRadius: '8px',
                                    marginBottom: '2rem',
                                    fontWeight: '500',
                                    color: '#059669'
                                }}>
                                    {t('quote.equivalent')} {quote.annual}€ / {t('quote.year')}
                                </div>

                                <button onClick={handleSubscribe} className="btn" style={{
                                    width: '100%',
                                    background: 'var(--secondary-color)',
                                    color: 'white'
                                }}>
                                    {t('quote.subscribeButton')} 👉
                                </button>
                                <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#94a3b8' }}>
                                    Sans engagement. Résiliable à tout moment.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: 'var(--secondary-color)',
    fontSize: '0.95rem'
};

const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    borderRadius: '12px',
    border: '1px solid #cbd5e1',
    fontSize: '1rem',
    transition: 'border-color 0.2s',
    outline: 'none'
};

export default Quote;
