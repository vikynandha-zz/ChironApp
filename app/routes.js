import HomeContainer from './containers/home';
import SetupConditionContainer from './containers/setupCondition';

export default routes = {
    homeScene: { name: 'HomeScene', component: HomeContainer},
    setupCondition: {name: 'SetupConditionScene', component: SetupConditionContainer}
}

export const initialRoute = {
    name: routes.homeScene.name,
    index: routes.homeScene.index,
    component: routes.homeScene.component
}
