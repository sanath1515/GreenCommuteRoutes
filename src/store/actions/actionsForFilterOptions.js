import { ADDTOFILTEROPTIONS } from '../types'

export const addTabToFilterOptions = (option) => {
    return {
        type: ADDTOFILTEROPTIONS,
        selectedTabs: option
    }
}