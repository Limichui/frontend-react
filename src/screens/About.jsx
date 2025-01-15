import { useState } from 'react';
import { useSelector } from 'react-redux';

const About = () =>  {
    // Los hooks en react son funciones ya definidas
    // hooks siempre tienen el prefijo use
    // hook useState, use Effect, useContext, useRef, useTransition
    // es posible crear muestris procios hooks: use Service, useImage, useForm

    // el hook useState me permite manejar variables de estado 
    const [nameComponenent, setNameComponent] = useState('About');

    const { initialValue } = useSelector((state) => state.product);
    return (
        <>
        <p>Componente: {nameComponenent}</p>
        <h3>{initialValue}</h3>
        <button onClick={() => {setNameComponent('Curso de React')}}>Presionar</button>
        </>
    );
};

export default About;