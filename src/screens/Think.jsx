import { useState } from 'react';

const Think = () => {
    const [nameComponenent] = useState('Think');
    return (
        <>
        <p>Componente: {nameComponenent}</p>prod
        </>
    );
};

export default Think;