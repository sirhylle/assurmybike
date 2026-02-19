/**
 * AssurMyBike - Header Component
 * 
 * Top navigation bar including:
 * - Brand Logo and Name
 * - Main navigation links (Home, Quote, Claims)
 * - Language selector (FR/EN)
 * 
 * @module Header
 * @author AssurMyBike Team
 */
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import bikeIcon from '../assets/bike_icon.png';

const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="header" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            padding: 'var(--spacing-md) 0',
            zIndex: 1000,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={bikeIcon} alt="Logo" style={{ height: '32px' }} />
                    <span style={{ color: 'var(--primary-color)' }}>Assur</span>MyBike
                </Link>

                <nav style={{ display: 'flex', gap: 'var(--spacing-lg)', alignItems: 'center' }}>
                    <Link to="/" style={{ color: 'white', fontWeight: 500 }}>{t('header.home')}</Link>
                    <Link to="/quote" style={{ color: 'white', fontWeight: 500 }}>{t('header.quote')}</Link>
                    <Link to="/claims" style={{ color: 'white', fontWeight: 500 }}>{t('header.claims')}</Link>

                    <div className="lang-selector" style={{ display: 'flex', gap: '5px' }}>
                        <button
                            onClick={() => changeLanguage('fr')}
                            style={{
                                background: 'transparent',
                                border: '1px solid white',
                                color: i18n.language === 'fr' ? 'var(--primary-color)' : 'white',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                padding: '2px 5px',
                                fontWeight: i18n.language === 'fr' ? 'bold' : 'normal'
                            }}
                        >
                            FR
                        </button>
                        <button
                            onClick={() => changeLanguage('en')}
                            style={{
                                background: 'transparent',
                                border: '1px solid white',
                                color: i18n.language === 'en' ? 'var(--primary-color)' : 'white',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                padding: '2px 5px',
                                fontWeight: i18n.language === 'en' ? 'bold' : 'normal'
                            }}
                        >
                            EN
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
