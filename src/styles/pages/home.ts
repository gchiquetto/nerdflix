import { styled } from '..'

export const HomeContainer = styled('main', {
    maxWidth: '90rem',
    width: '100%',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(182px, 1fr))',
    gap: '3.125rem',
    marginTop: '3.5rem',

    '@media (max-width: 1440px)':{
        padding: '2rem',
    },
})