import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/loader/Loader';
import Header from 'components/header/Header';

function Layout() {
    return <div>
                <Header/>
                <main>
                    <Suspense fallback={<Loader/>}>
                        <Outlet />
                    </Suspense>
                </main>
                {/* <footer>
                    <h1>directed by Stanislav Pravdiyk ©</h1>
                </footer> */}
            </div>;  
};

export default Layout;