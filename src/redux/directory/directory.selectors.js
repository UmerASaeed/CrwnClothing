import {createSelector} from "reselect"

const selectDirectory = state => state.directory

export const selectDirectoryCards = createSelector([selectDirectory],(directory)=>directory.cards)