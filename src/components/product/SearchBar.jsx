const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) => {
    return (
        <div style={{ border: '1px solid #0D4DBB', padding: '5px' }}>
            <form>
                <div style={{ textAlign: 'left' }}>
                    <input type="text" value={filterText} placeholder="Search..." onChange={(e) => onFilterTextChange(e.target.value)} />
                </div>
                <div style={{ textAlign: 'left' }}>
                    <label>
                        <input type="checkbox" checked={inStockOnly} onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                        {' '}
                        Only show products in stock
                    </label>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;