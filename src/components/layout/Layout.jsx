import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/loader/Loader';
import Navigation from 'components/navigation/Navigation';
import { useSelector } from 'react-redux';
import Footer from 'components/footer/Footer';

function Layout() {

    const { profile } = useSelector((state) => state.auth);

    return (
    <div>
        {profile && <Navigation />}
        
        <main>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </main>
        
        {profile && <Footer />}
    </div> 
    );
};

export default Layout;