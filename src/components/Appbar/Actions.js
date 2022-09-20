import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, Colors } from "../../styles/theme";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import { MyList } from "../../styles/Appbar";


export default function Actions({matches}) {

    const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;

    return (
        <Component>
            <MyList type='row'>
            <ListItemButton sx={{
                justifyContent: 'center'
            }}>
                <ListItemIcon sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: matches && Colors.secondary,
                }}>
                    <ShoppingCartIcon />
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem />
            <ListItemButton sx={{
                justifyContent: 'center'
            }}>
                <ListItemIcon sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: matches && Colors.secondary,
                }}>
                    <FavoriteIcon />
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem />
            <ListItemButton sx={{
                justifyContent: 'center'
            }}>
                <ListItemIcon sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: matches && Colors.secondary,
                }}>
                    <PersonIcon />
                </ListItemIcon>
            </ListItemButton>
        </MyList>
        </Component>
        
    )
}