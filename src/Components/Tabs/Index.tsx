import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { home, personCircle } from 'ionicons/icons';

import HomePage from '../../Pages/Home/Content';
import LoginPage from '../../Pages/Login/Content';

interface IRoute {
    title: string; 
    link: string; 
    exact: boolean; 
    component: React.FC;
    icon: any;
}

let routes: Array<IRoute> = [
    {
        title: 'Home',
        link: '/Home',
        exact: true,
        component: HomePage,
        icon: home
    },
    {
        title: 'Login',
        link: '/Login',
        exact: true,
        component: LoginPage,
        icon: personCircle
    }
]

function ReturnRoutes() {
    routes.forEach(route => {
        return( <Route path={route.link} component={route.component} exact={route.exact} /> );
    });
}

function ReturnTabItems() {
    routes.forEach(item => {
        return(
        <IonTabButton tab={item.title} href={item.link}>
            <IonIcon icon={item.icon} />
            <IonLabel>{item.title}</IonLabel>
        </IonTabButton>);
    });
}

const Tabs = ({routes}) => (
    <IonReactRouter>
        <IonTabs>

            <IonRouterOutlet>
                {}
                {console.log(ReturnRoutes)}
                <Route path="/" render={() => <Redirect to="/Home" />} exact={true} />
            </IonRouterOutlet>

            <IonTabBar slot="bottom" color="secondary">
                {ReturnTabItems}
            </IonTabBar>

        </IonTabs>
    </IonReactRouter>
)

export default Tabs;