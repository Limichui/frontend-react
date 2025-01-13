import ProductCategoryRow from "./ProductCategoryRow.jsx";
import ProductRow  from "./ProductRow.jsx";

const ProductTable = ({ products, filterText, inStockOnly }) => {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }

        if (inStockOnly && !product.stocked) {
            return;
        }

        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );
        }

        rows.push(
            <ProductRow
            product={product}
            key={product.name} />
        );
        lastCategory = product.category;
    });
    return (
        <div style={{ border: '1px solid #9167AF', padding: '5px', marginTop: '5px' }}>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <thead>
                <tr>
                    <th style={{width: '50%'}}>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}
/*
const ProductTable = ({ products }) => {
    const rows = [];
        let lastCategory = null;
    
        products.forEach((product) => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );
        }
        rows.push(
            <ProductRow
            product={product}
            key={product.name} />
        );
        lastCategory = product.category;
        });
        
    
        return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
        );
    }
    */

export default ProductTable;
