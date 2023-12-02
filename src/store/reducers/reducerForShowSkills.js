
import { SHOWSKILLS } from '../types'

const defaultLocation = [
]
const initialState = {
    activeSkills: defaultLocation

}

const ShowSkillsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOWSKILLS:
            return {
                activeSkills: action.location
            }
        default:
            return state;
    }
}

export default ShowSkillsReducer;