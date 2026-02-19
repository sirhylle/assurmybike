/**
 * AssurMyBike - Claims Declaration
 * 
 * Simple form form reporting incidents (Theft, Damage, etc.).
 * 
 * @module Claims
 * @author AssurMyBike Team
 */
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';

const Claims = () => {
    const { t } = useTranslation();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Declaration submitted! Our team will contact you shortly.");
    };

    return (
        <Layout>
            <div className="container" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div className="glass-card animate-fade-in">
                        <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)', color: 'var(--primary-color)' }}>
                            {t('claims.title')}
                        </h2>
                        <p style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)', color: '#666' }}>
                            {t('claims.description')}
                        </p>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                            <input required placeholder="Numéro de contrat" style={inputStyle} />
                            <input required type="date" placeholder="Date du sinistre" style={inputStyle} />
                            <select style={inputStyle}>
                                <option>Type de sinistre...</option>
                                <option>Vol</option>
                                <option>Casse / Accident</option>
                                <option>Vandalisme</option>
                            </select>
                            <textarea
                                required
                                placeholder="Description détaillée..."
                                rows="5"
                                style={{ ...inputStyle, resize: 'vertical' }}
                            />

                            <button type="submit" className="btn btn-primary" style={{ marginTop: 'var(--spacing-md)' }}>
                                Envoyer la déclaration
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

const inputStyle = {
    padding: '12px',
    borderRadius: 'var(--radius-md)',
    border: '1px solid #ddd',
    fontSize: '1rem',
    width: '100%'
};

export default Claims;
