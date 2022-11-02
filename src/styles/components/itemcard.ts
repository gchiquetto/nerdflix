import { styled } from '..'

export const ItemCardContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    alignItems: 'center',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',

    img: {
        borderRadius: 6,
    },

    '.overlay': {
        position: 'absolute',
        top: '0',
        left: '0',
        height: 268,
        width:'100%',
        background: '$gray600',
        borderRadius: 6,
        padding: '1rem',

        display: 'flex',
        flexDirection: 'column',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.3s ease-in-out',

        button: {
            background: 'transparent',
            border: 0,
            alignSelf: 'flex-end',
            cursor: 'pointer',

            svg: {
                color: '$white',
                opacity: 0.5,

                '&:hover': {
                    color: '$yellow',
                }
            }            
        },

        div: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    },

    '&:hover':{
        '.overlay': {
            transform: 'translateY(0%)',
            opacity: 0.8,
        }
    }

    
})

export const CardOverview = styled('div',{
    h3: {
        fontWeight: 600,
        fontSize: '0.75rem',
    },

    h4: {
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: '15px',
        opacity: 0.5
    }
})