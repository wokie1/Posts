import React, {useContext, useState} from 'react';
import {Navigate, Route, Routes} from "react-router";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context/index";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    const routes = isAuth ? privateRoutes : publicRoutes;
    if (isLoading) {
        return <Loader />
    }

    return (
        <Routes>
            {routes.map(({path, component: Component}, index) => (
                <Route
                    key={index}
                    path={path}
                    element={<Component />}
                />
            ))}
            <Route path='*' element={<Navigate to="/login" replace />} />
        </Routes>
    );
};

export default AppRouter;