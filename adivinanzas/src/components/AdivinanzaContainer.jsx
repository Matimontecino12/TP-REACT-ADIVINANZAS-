import { useEffect, useState } from 'react';
import Adivinanza from './Adivinanza';
import styles from './AdivinanzaContainer.module.css';

function AdivinanzaContainer() {
    const [adivinanzas, setAdivinanzas] = useState([]);

    useEffect(() => {
        async function fetchAdivinanzas() {
            const data = [
                { numero: 1, pregunta: 'Soy algo que vuela sin alas...', respuesta: 'El tiempo' },
                { numero: 2, pregunta: 'Tengo llaves pero no puertas...', respuesta: 'El piano' },
                { numero: 3, pregunta: 'Vuelo día y noche sin descanso...', respuesta: 'El sueño' },
                { numero: 4, pregunta: 'Siempre doy vueltas...', respuesta: 'La Tierra' },
                { numero: 5, pregunta: 'Cae pero nunca se rompe...', respuesta: 'La noche' },
            ];
            setAdivinanzas(data);
        }
        fetchAdivinanzas();
    }, []);

    return (
        <div className={styles.container}>
            {adivinanzas.map(adivinanza => (
                <Adivinanza
                    key={adivinanza.numero}
                    numero={adivinanza.numero}
                    pregunta={adivinanza.pregunta}
                    respuesta={adivinanza.respuesta}
                />
            ))}
        </div>
    );
}

export default AdivinanzaContainer;
