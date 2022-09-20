import { IconButton } from "@mui/material"
import { AppbarContainer, LogoImage } from "../../styles/Appbar"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./Actions";

export const AppbarMobile = ({matches}) => {
    return(
        <AppbarContainer>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <LogoImage src="./imgs/Yazz.png" />
            <IconButton>
                <SearchIcon />
            </IconButton>
            <Actions matches={matches} />
        </AppbarContainer>
    )
}