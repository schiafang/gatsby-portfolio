export const baseTheme = {
    gray: '#757575',
    grayLight: '#999999',
    grayDark: '#353535',
    breakpoints: {
        mobile: 'screen and (max-width: 768px)',
        tablet: 'screen and (min-width: 768px)',
        desktop: 'screen and (min-width: 1040px)',
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
    bg: '#f2efe7',
    border: '#ddd',
    primary: '#212121',
    red: '#D14836',
    yellow: '#ECD06F',
    green: '#49c5b6',
}
