import Loader from 'components/loader/Loader';
import Navigation from 'components/navigation/Navigation';
import Footer from 'components/footer/Footer';
import { useAuth } from '../../hooks/useAuth';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

function Layout() {
  const { isLogin } = useAuth();

    return (
    <div>
        <Navigation />

        <main>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </main>

        {isLogin && <Footer />}
    </div>
    );
};

export default Layout;