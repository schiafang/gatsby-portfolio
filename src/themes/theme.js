export const baseTheme = {
    gray: '#757575',
    grayLight: '#999999',
    grayDark: '#353535',
    breakpoints: {
        tablet: 'screen and (min-width: 768px)',
        desktop: 'screen and (min-width: 1040px)',
        wideScreen: 'screen and (min-width: 1280px)',
    },
}

export const darkTheme = {
    ...baseTheme,
    isDarkMode: true,
    bg: '#212121',
    border: '#333',
    primary: '#f2efe7',
    red: '#f98080',
    yellow: '#ECD06F',
    green: '#49c5b6',
}

export const lightTheme = {
    ...baseTheme,
    isDarkMode: false,
    bg: '#f8f8f8',
    border: '#ddd',
    primary: '#212121',
    red: '#D14836',
    yellow: '#ECD06F',
    green: '#49c5b6',
}
