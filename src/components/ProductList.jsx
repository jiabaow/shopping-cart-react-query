import {fetchProducts} from "../api-mock/products-api";
import {useQuery} from "@tanstack/react-query";
import ProductItem from "./ProductItem";

const ProductList = () => {
    const { data, isLoading, isError, error } =
        useQuery({queryKey: ['products'], queryFn: fetchProducts });

    if (isLoading) {
        return <div>Loading products...</div>;
    }

    if (isError) {
        return <div>Error fetching products: {error.message}</div>;
    }

    return (
        <div>
            <h2>Available Products</h2>
            <ul style={{ listStyle: 'none', padding: 0}}>
                {data.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
