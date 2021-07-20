export const baseTheme = {
    green: '#49c5b6',
    red: '#D14836',
    yellow: '#ECD06F',
    breakpoints: {
        mobile: 'only screen and (max-width: 768px)',
        tablet: 'only screen and (max-width: 1040px)',
    },
}

export const darkTheme = {
    ...baseTheme,
    mainColor: '#f2efe7',
    mainBackground: '#212121',
}

export const lightTheme = {
    ...baseTheme,
    mainColor: '#212121',
    mainBackground: '#f2efe7',
}
