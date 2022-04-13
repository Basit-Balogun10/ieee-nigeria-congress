// On page load or when changing themes, best to add inline in `head` to avoid FOUC
const loadTheme = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    } else {
    document.documentElement.classList.remove('dark')
    }
}
window.addEventListener('load', loadTheme)


const changeToLightTheme = () => {
    document.documentElement.classList.tog('dark')
    localStorage.theme = 'light'

const changeToDarkTheme = () => {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
}
