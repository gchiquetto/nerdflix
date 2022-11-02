import { styled } from '..'

export const BannerContainer = styled('div',{
    backgroundColor: '$gray600',
    height: '7.625rem',
 
    '@media (max-width: 560px)':{
     height: '100%',
 }
 })
 
 export const BannerContent = styled('div', {
     maxWidth: '90rem',
     margin: '0 auto',
     paddingTop: '2rem',
 
     h1: {
         fontSize: '2.375rem',
         lineHeight: '38px',
         fontWeight: 400,
     },
 
        
    '@media (max-width: 1440px)':{
         padding: '2rem',
     },
 
     '@media (max-width: 560px)':{
         h1: {
             marginBottom: '2rem',
         }
     }
 })
 
 export const SearchContainer = styled('div',{
     display: 'flex',
     justifyContent: 'space-between',
     flexWrap: 'wrap',
     alignItems: 'flex-end',
     width: '100%',
     
     h2: {
         marginBottom: '0.56rem',
         fontSize: '1rem',
         fontWeight: 600,
         opacity: 0.5
     },
 
     'input, select': {
         height: '3rem',
         borderRadius: 6,
         border: '1px solid $gray200',
         backgroundColor: '$gray800',
         padding: '1rem',
         fontWeight: 600,
         color: 'inherit',
     },
 
     '@media (max-width: 560px)':{
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'flex-start',
         gap: '1rem',
     }
 })
 
 export const SearchBox =styled('div',{
     display: 'flex',
     alignItems: 'center',
 
     svg: {
         marginLeft: '-2rem',
     }
 })
 
 export const SortContainer = styled('div',{
     select: {
         cursor: 'pointer',
         option: {
             padding: '1rem',
         }
     },
 
     'select:first-child':{
         marginRight: '1.875rem',
     }
 })