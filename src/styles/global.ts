import { globalCss } from '.'

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        },
    
    body: {
        background: '$gray400',
        color: '$white',
        '-webkit-font-smoothing': 'antialiased',
    },

    'body, input, button': {
        fontFamily: 'Source Sans Pro, sans-serif',
        fontSize: '1rem',
    },

    a: {
        textDecoration: 'none',
        color: 'inherit',
    },

    ul: {
        listStyle: 'none',
    }
})