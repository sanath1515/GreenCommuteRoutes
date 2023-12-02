import { combineReducers } from 'redux';
import ShowStepperReducer from './reduceForShowStepper';
import jobReducer from './reducer';
import jobDescriptionReducer from "./reducerForShowJob";
import ShowJobLocationReducer from './reducerForShowJobLocation';
import showPageReducer from "./reducerForShowPage"
import showSkillsReducer from './reducerForShowSkills';
import ShowYourLocationReducer from './reducerForShowYourLocation';
import sideNavBarReducer from "./reducerForSideNavBar";
import filterOptionsReducer from "./reducerForFIlterOptions"

const rootReducer = combineReducers({
    jobs: jobReducer,
    jobsDescription: jobDescriptionReducer,
    showPage: showPageReducer,
    sideNavBar: sideNavBarReducer,
    ShowStepper: ShowStepperReducer,
    showYourLocation: ShowYourLocationReducer,
    showSkills: showSkillsReducer,
    showJobLocation: ShowJobLocationReducer,
    showCheckedFilterOptions: filterOptionsReducer,
});


export default rootReducer