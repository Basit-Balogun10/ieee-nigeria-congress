const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const topBtn = document.getElementById('toTopBtn')
const bottomBtn = document.getElementById('toBottomBtn')

window.onscroll = () => {toggleJumpBtn()}

const toggleJumpBtn = () => {
    if ((document.documentElement.scrollTop > document.documentElement.scrollHeight/3) || (document.body.scrollTop > document.body.scrollHeight/3)) {
        !bottomBtn.classList.contains('hidden') && bottomBtn.classList.toggle('hidden');
        topBtn.classList.contains('hidden') && topBtn.classList.toggle('hidden');
    } else {
        !topBtn.classList.contains('hidden') && topBtn.classList.toggle('hidden');
        bottomBtn.classList.contains('hidden') && bottomBtn.classList.toggle('hidden');
    }
}

const jumpToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const jumpToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight)
}

// Change the icons inside the button based on previous settings
if (
    localStorage.getItem('ascf-theme') === 'dark' ||
    (!('ascf-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

const themeToggleBtn = document.getElementById('theme-toggle');

const toggleThemeMode = () => {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('ascf-theme')) {
        if (localStorage.getItem('ascf-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('ascf-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('ascf-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('ascf-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('ascf-theme', 'dark');
        }
    }
}

themeToggleBtn.addEventListener('click', toggleThemeMode);
topBtn.addEventListener('click', jumpToTop);
bottomBtn.addEventListener('click', jumpToBottom);