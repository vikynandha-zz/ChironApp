import HomeContainer from './containers/home';
import SetupConditionContainer from './containers/setupCondition';
import ScheduleVisitContainer from './containers/scheduleVisit';

export default routes = {
    homeScene: { name: 'HomeScene', component: HomeContainer},
    setupCondition: {name: 'SetupConditionScene', component: SetupConditionContainer},
    scheduleVisit: {name: 'ScheduleVisitScene', component: ScheduleVisitContainer}
}

export const initialRoute = {
    name: routes.homeScene.name,
    index: routes.homeScene.index,
    component: routes.homeScene.component
}
