export const THEME_CHANGE = 'THEME_CHANGE'

export const handleThemeChange = (theme) => ({
  type: THEME_CHANGE,
  payload: theme
})