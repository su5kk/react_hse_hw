import {THEME_CHANGE} from "../actions/theme" // need to create theme action for that

const initialState = {
  theme: "light" // theme must be set, so let default theme be light
}

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_CHANGE: {
      return {
        theme: action.payload
      }
    }
    default:
      return state
  }
}