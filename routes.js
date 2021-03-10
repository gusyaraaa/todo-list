import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { ProfilePage } from './pages/ProfilePage'
import { CreatePage } from './pages/CreatePage'
// import { DetailPage } from './pages/DetailPage'
import { AuthPage } from './pages/AuthPage'

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/profile" exact>
                    <ProfilePage />
                </Route>
                <Route path="/create" exact>
                    <CreatePage />
                </Route>
                {/* <Route path="/detail/:id">
                    <DetailPage />
                </Route> */}
                <Redirect to="/profile" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}