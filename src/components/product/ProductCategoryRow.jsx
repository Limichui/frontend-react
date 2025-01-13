const ProductCategoryRow = ({ category }) => {
    return (
        <tr>
            <th colSpan="2" style={{ border: '1px solid #59A293', padding: '5px' }}>
              { category }
            </th>
        </tr>
    );
}

export default ProductCategoryRow;