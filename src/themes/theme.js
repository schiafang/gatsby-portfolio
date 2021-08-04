export const baseTheme = {
    green: '#49c5b6',
    red: '#D14836',
    yellow: '#ECD06F',
    darkGray: '#333',
    breakpoints: {
        mobile: 'screen and (max-width: 768px)',
        tablet: 'screen and (min-width: 768px)',
        desktop: 'screen and (min-width: 1040px)',
    },
}

export const darkTheme = {
    ...baseTheme,
    isDarkMode: true,
    // mainColor: '#f2efe7',
    mainColor: '#ffffffe6',
    red: '#f98080',
    mainBackground: '#212121',
    lightBorder: '#333',
}

export const lightTheme = {
    ...baseTheme,
    isDarkMode: false,
    mainColor: '#212121',
    mainBackground: '#f2efe7',
    lightBorder: '#ddd',
}
