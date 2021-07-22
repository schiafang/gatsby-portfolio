export const baseTheme = {
    green: '#49c5b6',
    red: '#D14836',
    yellow: '#ECD06F',
    breakpoints: {
        mobile: 'only screen and (max-width: 768px)',
        tablet: 'only screen and (min-width: 768px)',
        desktop: 'only screen and (min-width: 1040px)',
    },
}

export const darkTheme = {
    ...baseTheme,
    isDarkMode: true,
    mainColor: '#f2efe7',
    mainBackground: '#212121',
}

export const lightTheme = {
    ...baseTheme,
    isDarkMode: false,
    mainColor: '#212121',
    mainBackground: '#f2efe7',
}
