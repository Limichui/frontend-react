const ProductRow = ({ product }) => {
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
            {product.name}
        </span>;
    return (
        <tr style={{ marginTop: '5px'}}>
            <td style={{ 
                borderTop: '1px solid #BE9B32',
                borderLeft: '1px solid #BE9B32', 
                borderBottom: '1px solid #BE9B32', 
                padding: '5px'
                }}
            >
                {name}
            </td>
            <td style={{ 
                borderTop: '1px solid #BE9B32',
                borderRight: '1px solid #BE9B32', 
                borderBottom: '1px solid #BE9B32', 
                padding: '5px'
                }}
            >
                {product.price}
            </td>
        </tr>
    );
}

export default ProductRow;