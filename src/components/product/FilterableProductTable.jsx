import { useState } from 'react';
import SearchBar from "./SearchBar.jsx";
import ProductTable from "./ProductTable.jsx"

const FilterableProductTable = ({ products }) => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div style={{ border: '1px solid #788296', padding: '5px' }}>
            <SearchBar 
                filterText={filterText} 
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly}
            />
            <ProductTable 
                products={ products }
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    );
};

export default FilterableProductTable;