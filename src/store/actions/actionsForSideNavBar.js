import { TABSELECTEDINSIDENAVBAR } from '../types'

export const changeTabInSideNavBar = (tab) => {
    return {
        type: TABSELECTEDINSIDENAVBAR,
        selectedTab: tab
    }
}