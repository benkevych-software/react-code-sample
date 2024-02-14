import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginForm } from 'core/src/components/Forms/Login/LoginForm';
import { LoginRoute } from 'core/src/routes/Login/LoginRoute';
import { SecureRoute } from 'core/src/routes/Secure/SecureRoute';

import { HomeRoute } from './Home/HomeRoute';
import { MainRoutes } from './types';

export const MainRouter: React.FC = () => {
    return (
        <BrowserRouter basename={process.env.REACT_APP_BASENAME || ''}>
            <Routes>
                <Route
                    path={MainRoutes.HOME}
                    element={
                        <SecureRoute>
                            <HomeRoute />
                        </SecureRoute>
                    }
                />
                <Route path={MainRoutes.LOGIN} element={<LoginRoute />}>
                    <Route index element={<LoginForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
