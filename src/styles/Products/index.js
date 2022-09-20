import IconButton, { Button } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";
import {flipHorizontalBottom, slideBottom} from '../../animation'



export const Product = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoint.up('md')]: {
        position: 'relative'
    }
}));

export const ProductImage = styled('img')(({src, theme}) => ({

    src: `url(${src})`,
    width: '100%',
    background: Colors.light_gray,
    padding: '10px',
    [theme.breakpoint.down('md')]: {
        width: '80px',
        padding: '24px',
    }
}));

export const ProductActionButton = styled(IconButton)(() => ({
    background: Colors.white,
    margin: 4,
}));

export const ProductFavButton = styled(ProductActionButton)(({ isfav, theme }) => ({
    color: isfav ? Colors.primary : Colors.light,
    [theme.breakpoint.up('md')]: {
        position: 'absolute',
        right: 0,
        top: 0,
    }
}));

export const ProductAddToCart = styled(Button)((show, theme) => ({

    width: '120px',
    fontSize: '120px',
    [theme.breakpoint.up('md')]: {
        position: 'absolute',
        bottom: '2%',
        width: '300px',
        padding: '10px, 5px',
        animation:
        show &&
        `${flipHorizontalBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    },
    background: Colors.secondary,
    opacity: 0.9,
}));

export const ProductMetaWrapper = styled(Box)(({theme}) => ({
    padding: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}));

export const ProductActionWrapper = stlyed(Box)(({show, theme}) => ({
    [theme.breakpoint.up('md')]: {
        display: show ? 'visible' : 'none',
        position: 'absolute',
        right: 0,
        top: '20%',
        animation: show && `${slideBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
    }
}));
