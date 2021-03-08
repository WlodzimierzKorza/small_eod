import React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import CasesView from './views/CasesView'
import InstytutionsView from './views/InstitutionsView'
import ChannelsView from './views/ChannelsViews'
import DocumentTypes from './views/DocumentsTypes'
import FeaturesView from './views/FeaturesView'
import MainTemplate from './templates/MainTemplate'
import { routs } from './routs'

const App = () => {
    const { cases, channels, features, documentTypes, users, instytutions } = routs
    return (
        <BrowserRouter>
            <MainTemplate>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/sprawy" />} />
                    <Route path={`${cases.path}`} component={CasesView} />
                    <Route path={`${channels.path}`} component={ChannelsView} />
                    <Route path={`${features.path}`} component={FeaturesView} />
                    <Route path={`${documentTypes.path}`} component={DocumentTypes} />
                    <Route path={`${instytutions.path}`} component={InstytutionsView} />
                </Switch>
            </MainTemplate>
        </BrowserRouter>
    )
}

export default App
