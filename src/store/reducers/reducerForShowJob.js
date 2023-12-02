import { SHOWJOB, SHOWJOBFORSAVEDJOBS } from '../types'

const initialState = {
    jobInShowJob: {},
    previewJobDescription: false,
    jobToBeDisplayedInSavedJob: {}
}

const jobDescriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOWJOB:
            return {
                jobInShowJob: action.job,
                previewJobDescription: true,
            };
        case SHOWJOBFORSAVEDJOBS:
            return {
                jobToBeDisplayedInSavedJob: action.job,
                previewJobDescription: true,
            }
        default:
            return state;
    }
}

export default jobDescriptionReducer;