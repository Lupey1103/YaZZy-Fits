import { useTheme } from '@mui/material/styles'
import {useMediaQuery} from '@mui/material'
import { AppbarMobile } from './AppbarMobile'
import {AppbarDesktop } from './AppbarDesktop'

export const Appbar = () => {

    const theme = useTheme()
    const matches =useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {matches ? <AppbarMobile matches={matches} /> : <AppbarDesktop matches={matches} />}
        </>
    )
}