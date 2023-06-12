import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';

function Layout() {
    return <div>
                <header>
                    <ul>
                        <li>
                            <NavLink to='/'>Phonebook</NavLink>
                        </li>
                        <li>
                            <NavLink to='/SignUp'>Sign up</NavLink>
                        </li>
                        <li>
                            <NavLink to='/SignIn'>Sign in</NavLink>
                        </li>
                    </ul>
                </header>
                <main>
                    <Suspense fallback={<Loader/>}>
                        <Outlet />
                    </Suspense>
                </main>
                <footer>
                    <h1>directed by Stanislav Pravdiyk ©</h1>
                </footer>
            </div>;  
};

export default Layout;