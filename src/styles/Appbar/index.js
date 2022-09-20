import {styled} from '@mui/material/styles'
import { List } from '@mui/material'
import {Box} from '@mui/system'
import '@fontsource/montez'

export const AppbarContainer = styled(Box)(() => ({
    
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px',
}));

export const LogoImage = styled('img')(({src, theme}) => ({
    src: `url(${src})`,
    width: '250px',
    marginRight: '75px',
    [theme.breakpoints.down('md')]: {
        width: '350px',
        marginLeft: '100px',
        marginRight: '100px'
    },

    [theme.breakpoints.down('sm')]: {
        width: '320px',
        height: '75px',
        margin: '30px'
    }
}))

export const MyList = styled(List)(({type}) => ({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justifyContent: 'center',
    alignItems: 'center'
}))