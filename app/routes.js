import HomeContainer from './containers/home';
import SetupConditionContainer from './containers/setupCondition';
import SetupRemindersContainer from './containers/setupReminders';

export default routes = {
    homeScene: { name: 'HomeScene', component: HomeContainer},
    setupCondition: {name: 'SetupConditionScene', component: SetupConditionContainer},
    setupReminders: {name: 'SetupRemindersScene', component: SetupRemindersContainer}
}

export const initialRoute = {
    name: routes.homeScene.name,
    index: routes.homeScene.index,
    component: routes.homeScene.component
}
