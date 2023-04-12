import { createStitches } from "@stitches/react";

export const {
    config, 
    styled, 
    css ,
    globalCss, 
    keyframes, 
    getCssText , 
    theme , 
    createTheme 
} = createStitches({
    theme: {
        colors: {
            white: '#fff',
            
            gray100: '#e1e1e6',
            gray300: '#c4c4cc',
            gray800: '#202024',
            gray900: '#121214',

            green500: '#00875f',
            green300: '#00b37e',
        },
        fonts: {
            md: '1.25rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '2rem',
        },
    }
})

