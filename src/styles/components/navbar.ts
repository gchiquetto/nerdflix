import { styled } from '..'

export const NavbarContainer = styled('nav',{
    position: 'fixed',
    top:'4.7rem',
    left: 0,
    backgroundColor: '$gray800',
    height: '100vh',
    padding: '2rem',
    minWidth: '18.75rem',
    

    ul: {
        flexDirection: 'column',
        
        li: {
            height: '4.7rem',
            display: 'flex',
            alignItems: 'center',
            opacity: 0.7,
            cursor: 'pointer',
    
            '&:hover':{
                opacity: 1,
                transition: 'all .4s ease',
            }
        }
    },

    '@media (min-width: 1000px)':{
        display:'none',
    }

})