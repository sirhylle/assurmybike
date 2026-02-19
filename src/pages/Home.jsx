/**
 * AssurMyBike - Home Page
 * 
 * Landing page featuring:
 * - Hero section with CTA
 * - Key features glass-cards
 * - Visual storytelling with family mountain biking theme
 * 
 * @module Home
 * @author AssurMyBike Team
 */
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../components/Layout';
import heroBg from '../assets/hero_bg.png';
import featuresBg from '../assets/features_bg.png';

const Home = () => {
    const { t } = useTranslation();

    return (
        <Layout>
            <div className="hero" style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                position: 'relative',
                marginTop: '-80px' // Pull behind header
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 100%)'
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
                    <h1 className="animate-fade-in" style={{
                        fontSize: '4rem',
                        fontWeight: 800,
                        marginBottom: 'var(--spacing-md)',
                        lineHeight: 1.1,
                        textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                    }}>
                        {t('home.heroTitle')}
                    </h1>
                    <p className="animate-fade-in" style={{
                        fontSize: '1.25rem',
                        marginBottom: 'var(--spacing-xl)',
                        animationDelay: '0.2s',
                        opacity: 0.9,
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        {t('home.heroSubtitle')}
                    </p>
                    <Link to="/quote" className="btn btn-primary animate-fade-in" style={{
                        animationDelay: '0.4s',
                        fontSize: '1.2rem',
                        padding: '1rem 3rem'
                    }}>
                        {t('home.cta')}
                    </Link>
                </div>
            </div>

            {/* Features Section */}
            <div style={{
                background: `url(${featuresBg})`,
                backgroundSize: 'cover',
                padding: 'var(--spacing-xl) 0'
            }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 'var(--spacing-lg)',
                        marginTop: '-200px', // Overlap effect - Pulled up further
                        position: 'relative',
                        zIndex: 10
                    }}>
                        <FeatureCard
                            title="0€ Franchise"
                            text="Pas de mauvaise surprise en cas de pépin. Vous êtes couvert intégralement dès le premier euro."
                            icon="🛡️"
                        />
                        <FeatureCard
                            title="Assistance 24/7"
                            text="Une crevaison au sommet ? Nous venons vous chercher, partout en Europe, tout le temps."
                            icon="🚑"
                        />
                        <FeatureCard
                            title="Vol & Casse"
                            text="Votre vélo est remboursé à sa valeur d'achat pendant 2 ans. Roulez l'esprit tranquille."
                            icon="🚲"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

// eslint-disable-next-line react/prop-types
const FeatureCard = ({ title, text, icon }) => (
    <div className="glass-card" style={{
        background: 'white',
        border: 'none',
        boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
        padding: '3rem 2rem',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
        cursor: 'default'
    }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{icon}</div>
        <h3 style={{ color: 'var(--secondary-color)', marginBottom: '1rem', fontWeight: 700 }}>{title}</h3>
        <p style={{ color: '#64748b', lineHeight: 1.6 }}>{text}</p>
    </div>
);

export default Home;
