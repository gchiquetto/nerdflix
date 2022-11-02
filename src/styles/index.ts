import { createStitches } from '@stitches/react'

export const {
    config, 
    styled, 
    css,
    globalCss, 
    keyframes,
    getCssText,
    theme, 
    createTheme,
} = createStitches({
    theme: {
        colors: {
            white: '#FFFFFF',
            yellow: '#F8E71C',
            red: '#E50914',

            gray800: '#131313',
            gray600: '#171717',
            gray400: '#1D1D1D',
            gray200: '#2E2E2E',
        }
    }
})