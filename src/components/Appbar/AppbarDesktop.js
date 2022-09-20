import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { AppbarContainer, LogoImage, MyList } from "../../styles/Appbar"
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./Actions";

export const AppbarDesktop = ({matches}) => {

    return (
       <AppbarContainer>
        <LogoImage src="./imgs/Yazz.png" />
        <MyList type='row'>
            <ListItemText primary="Home" />
            <ListItemText primary="Catagories" />
            <ListItemText primary="Products" />
            <ListItemText primary="Contact Us" />
            <ListItemButton>
                <ListItemIcon>
                    <SearchIcon />
                </ListItemIcon>
            </ListItemButton>
        </MyList>
        <Actions matches={matches} />
       </AppbarContainer>
    )
}