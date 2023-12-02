import { TABSELECTEDINSIDENAVBAR } from "../types"


const initialState = {
    selectedTab: 1
}

const sideNavBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case TABSELECTEDINSIDENAVBAR:
            return {
                selectedTab: action.selectedTab
            }
        default:
            return state
    }
}
export default sideNavBarReducer