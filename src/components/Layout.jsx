/**
 * AssurMyBike - Layout Component
 * 
 * Main layout wrapper containing the Header and Footer.
 * Ensures consistent page structure and flexible content area.
 * 
 * @module Layout
 * @author AssurMyBike Team
 */
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main style={{ flex: 1, paddingTop: 0 }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
