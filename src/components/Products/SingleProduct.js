import { Product, ProductImage } from "../../styles/Products";


export default function SingleProduct({product, matches}) {


    return (
        <Product>
            <ProductImage src={product.image} />
        </Product>
    )
}