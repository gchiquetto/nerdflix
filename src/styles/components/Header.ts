import { styled } from '..'

export const HeaderContainer = styled('header', {
    backgroundColor: '$gray800', 
    position: 'sticky', 
    top: 0, 
    zIndex: 1,
})

export const HeaderContent = styled('header', {
   height: '4.7rem',
   maxWidth: '90rem',
   margin: '0 auto',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',

   button: {
        color: '$white',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        

        '@media (min-width: 1000px)':{
            display:'none',
        }
   },

   
   '@media (max-width: 1440px)':{
        padding: '0 2rem',
   }

})

export const HeaderNav = styled('nav',{
    ul: {
    display: 'flex',
    gap: '3.125rem',


    li: {
        height: '4.7rem',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '4px solid transparent',
        opacity: 0.7,
        cursor: 'pointer',

        '&.active':{
            color: '$white',
            opacity: 1,
            borderBottom: '4px solid $red',
        },

        '&:hover':{
            opacity: 1,
            borderBottom: '4px solid red',
            transition: 'all .4s ease',
        }
    }
    },
    

    '@media (max-width: 1000px)':{
        display:'none',
    }
       
})

export const HeaderLogo = styled('div', {

})

export const LikesContainer = styled('div',{
    display: 'flex',
    alignItems: 'center',
    gap: '0.3125rem',

    svg: {
        color: '$yellow',
    },

    p: {
        fontWeight: 600,
        lineHeight: 16
    }
})