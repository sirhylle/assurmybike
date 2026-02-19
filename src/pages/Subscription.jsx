/**
 * AssurMyBike - Subscription Flow
 * 
 * Multi-step wizard for insurance subscription:
 * 1. Coverage Recap
 * 2. Personal Info
 * 3. Bike Details
 * 4. Documents Upload
 * 
 * @module Subscription
 * @author AssurMyBike Team
 */
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import PropTypes from 'prop-types';

const Subscription = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    // Initial state from Quote page or defaults
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState(location.state || {
        bikeValue: '',
        purchaseDate: '',
        firstName: '',
        lastName: '',
        email: '',
        bikeBrand: '',
        bikeModel: '',
        serialNumber: '',
        files: {}
    });

    // Mock validation for file uploads
    const [fileWarnings, setFileWarnings] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];

        if (file) {
            // Check file type/size (Mock logic)
            let warning = null;
            if (!file.name.toLowerCase().endsWith('.pdf') && !file.name.toLowerCase().endsWith('.jpg')) {
                warning = "Format recommandé : PDF ou JPG";
            } else if (file.size > 5000000) {
                warning = "Fichier volumineux (> 5Mo)";
            }

            setFileWarnings(prev => ({ ...prev, [name]: warning }));
            setFormData(prev => ({
                ...prev,
                files: { ...prev.files, [name]: file.name }
            }));
        }
    };

    const nextStep = (e) => {
        e.preventDefault();
        setStep(prev => prev + 1);
    };

    const prevStep = () => {
        setStep(prev => prev - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Subscription Simulated Successfully! (API Call would happen here)");
        navigate('/');
    };

    const renderStep1 = () => (
        <div className="animate-fade-in">
            <h3>{t('subscription.step1')}</h3>
            <div className="glass-card" style={{ marginTop: '20px', borderColor: 'var(--primary-color)' }}>
                <p><strong>Formule Complète</strong></p>
                <ul style={{ listStyle: 'check', paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Responsabilité Civile</li>
                    <li>Vol & Casse (Valeur à neuf 2 ans)</li>
                    <li>Assistance 0km</li>
                    <li>Défense Pénale et Recours</li>
                </ul>
                <div style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '1.2rem' }}>
                    Tarif : {formData.quote?.annual}€ / an
                </div>
            </div>
            <div style={{ marginTop: '20px', textAlign: 'right' }}>
                <button onClick={nextStep} className="btn btn-primary">{t('subscription.next')}</button>
            </div>
        </div>
    );

    const renderStep2 = () => (
        <form onSubmit={nextStep} className="animate-fade-in">
            <h3>{t('subscription.step2')}</h3>
            <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
                <input required placeholder="Prénom" name="firstName" value={formData.firstName} onChange={handleInputChange} style={inputStyle} />
                <input required placeholder="Nom" name="lastName" value={formData.lastName} onChange={handleInputChange} style={inputStyle} />
                <input required type="email" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} style={inputStyle} />
            </div>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                <button type="button" onClick={prevStep} className="btn btn-secondary">Retour</button>
                <button type="submit" className="btn btn-primary">{t('subscription.next')}</button>
            </div>
        </form>
    );

    const renderStep3 = () => (
        <form onSubmit={nextStep} className="animate-fade-in">
            <h3>{t('subscription.step3')}</h3>
            <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
                <input required placeholder="Marque" name="bikeBrand" value={formData.bikeBrand} onChange={handleInputChange} style={inputStyle} />
                <input required placeholder="Modèle" name="bikeModel" value={formData.bikeModel} onChange={handleInputChange} style={inputStyle} />
                <input required placeholder="Numéro de Série (Gravage)" name="serialNumber" value={formData.serialNumber} onChange={handleInputChange} style={inputStyle} />
            </div>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                <button type="button" onClick={prevStep} className="btn btn-secondary">Retour</button>
                <button type="submit" className="btn btn-primary">{t('subscription.next')}</button>
            </div>
        </form>
    );

    const renderStep4 = () => (
        <form onSubmit={handleSubmit} className="animate-fade-in">
            <h3>{t('subscription.step4')}</h3>
            <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
                <FileInput label="Pièce d'identité" name="idCard" onChange={handleFileChange} warning={fileWarnings.idCard} />
                <FileInput label="Facture d'achat du vélo" name="invoiceBike" onChange={handleFileChange} warning={fileWarnings.invoiceBike} />
                <FileInput label="Facture antivol agréé" name="invoiceLock" onChange={handleFileChange} warning={fileWarnings.invoiceLock} />
            </div>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                <button type="button" onClick={prevStep} className="btn btn-secondary">Retour</button>
                <button type="submit" className="btn btn-primary">{t('subscription.submit')}</button>
            </div>
        </form>
    );

    return (
        <Layout>
            <div className="container" style={{ paddingTop: '100px', maxWidth: '800px' }}>
                <div className="glass-card">
                    {/* Progress Bar */}
                    <div style={{ display: 'flex', marginBottom: '30px', justifyContent: 'space-between', position: 'relative' }}>
                        {[1, 2, 3, 4].map(s => (
                            <div key={s} style={{
                                width: '30px', height: '30px', borderRadius: '50%',
                                background: s <= step ? 'var(--primary-color)' : '#ddd',
                                color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontWeight: 'bold', zIndex: 1
                            }}>
                                {s}
                            </div>
                        ))}
                        <div style={{
                            position: 'absolute', top: '14px', left: '0', right: '0', height: '2px', background: '#ddd', zIndex: 0
                        }}>
                            <div style={{ width: `${((step - 1) / 3) * 100}%`, height: '100%', background: 'var(--primary-color)', transition: 'width 0.3s' }}></div>
                        </div>
                    </div>

                    {step === 1 && renderStep1()}
                    {step === 2 && renderStep2()}
                    {step === 3 && renderStep3()}
                    {step === 4 && renderStep4()}
                </div>
            </div>
        </Layout>
    );
};

const FileInput = ({ label, name, onChange, warning }) => (
    <div>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>{label}</label>
        <input type="file" name={name} onChange={onChange} required style={{ width: '100%' }} />
        {warning && <span style={{ color: 'orange', fontSize: '0.8rem', display: 'block', marginTop: '5px' }}>⚠️ {warning}</span>}
    </div>
);

FileInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    warning: PropTypes.string
};

const inputStyle = {
    padding: '12px',
    borderRadius: 'var(--radius-md)',
    border: '1px solid #ddd',
    fontSize: '1rem'
};

export default Subscription;
