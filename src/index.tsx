import ReactDOM from 'react-dom/client';
import MainLayout from './layouts/MainLayout';
import AuthPage from './pages/AuthPAge';
import RegistrationPage from './pages/RegistrationPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h1>error</h1>,
        children: [
            {
                index: true, element: <AuthPage/>
            },
            {
                path: '/registration', element: <RegistrationPage/>
            }
        ]

    }
]);

root.render(
    <RouterProvider router={router}/>
);
