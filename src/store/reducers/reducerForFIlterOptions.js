import { ADDTOFILTEROPTIONS } from '../types'

const initialState = {
    tabsInFilterOptions: []
}

const filterOptionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTOFILTEROPTIONS:
            return {
                ...state,
                tabsInFilterOptions: action.selectedTabs
            }
        default:
            return {
                ...state
            }
    }
}

export default filterOptionsReducer