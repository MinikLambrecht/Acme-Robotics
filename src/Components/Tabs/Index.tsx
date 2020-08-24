import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { home, personCircle } from 'ionicons/icons';

import HomePage from '../../Pages/Home/Content';
import LoginPage from '../../Pages/Login/Content';

const Tabs = () => (
    <IonReactRouter>
        <IonTabs>

            <IonRouterOutlet>
                <Route path="/Home" component={HomePage} exact={true} />
                <Route path="/Login" component={LoginPage} exact={true} />
                <Route path="/" render={() => <Redirect to="/Home" />} exact={true} />
            </IonRouterOutlet>

            <IonTabBar slot="bottom" color="secondary">
                <IonTabButton tab="Home" href="/Home">
                    <IonIcon icon={home} />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>

                <IonTabButton tab="Login" href="/Login">
                    <IonIcon icon={personCircle} />
                    <IonLabel>Login</IonLabel>
                </IonTabButton>
            </IonTabBar>

        </IonTabs>
    </IonReactRouter>
)

export default Tabs;