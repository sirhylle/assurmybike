/**
 * AssurMyBike - Footer Component
 * 
 * Simple footer displaying copyright information.
 * sticky-bottom behavior handled by Layout.
 * 
 * @module Footer
 * @author AssurMyBike Team
 */
const Footer = () => {
    return (
        <footer style={{
            background: 'var(--secondary-color)',
            color: 'white',
            padding: 'var(--spacing-lg) 0',
            marginTop: 'auto'
        }}>
            <div className="container" style={{ textAlign: 'center', opacity: 0.8 }}>
                <p>&copy; {new Date().getFullYear()} AssurMyBike. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
