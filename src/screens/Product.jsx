import { useEffect, useState } from 'react';
import FilterableProductTable from '../components/product/FilterableProductTable.jsx';
import { getProducts } from '../api/productApi.js'

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts(); // Llama a la función asíncrona
                setProducts(data); // Almacena los productos en el estado
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false); // Cambia el estado de carga
            }
        };

        fetchProducts();
    }, []); // Solo se ejecuta al montar el componente

    if (loading) return <p>Loading...</p>;

    return (
        <div style={{ paddingTop: '20px'  }}>
            <FilterableProductTable products={ products } />
        </div>
    );
};

export default Product;