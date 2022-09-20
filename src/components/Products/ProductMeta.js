import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/Products";


export default function ProductMeta({product, matches}) {
    return (
        <ProductMetaWrapper>
            <Typography varient={matches ? 'h5' : 'h5'} lineHeight={2}>
                {product.name}
            </Typography>
            <Typography varient={matches ? 'caption' : 'body1'}>
                `${product.price}`
            </Typography>
        </ProductMetaWrapper>
    )
}