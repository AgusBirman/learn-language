import QRCode from 'react-qr-code'
import Text from '../../../components/core/Text'
import Button from '../../../components/core/Button'
import { Link } from 'react-router-dom'
import './index.css'
import logic from '../../../logic'
import { Context } from '../../../useContext'
import { useContext, useEffect, useState } from 'react'

function ShareQR() {
    const [userId, setUserId] = useState('')

    const { alert } = useContext(Context)

    useEffect(() => {
        getUserId()
    }, [])

    const getUserId = () => {
        try {
            const userrId = logic.getUserId()
            setUserId(userrId)
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    const copyToClipboard = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            // Método moderno usando la API del portapapeles si está disponible
            navigator.clipboard.writeText(url)
                .then(() => {
                    alert('URL copiada al portapapeles');
                })
                .catch((error) => {
                    console.error('Error al copiar al portapapeles:', error);
                    alert('Hubo un error al copiar al portapapeles');
                });
        } else {
            // Método alternativo usando un textarea temporal
            const textArea = document.createElement('textarea');
            textArea.value = url;
            textArea.style.position = 'fixed';  // Evita que el textarea influya en el diseño de la página
            textArea.style.opacity = 0;  // Hace el textarea invisible
            document.body.appendChild(textArea);  // Añade el textarea al DOM
            textArea.focus();
            textArea.select();  // Selecciona el contenido del textarea

            try {
                const successful = document.execCommand('copy');  // Ejecuta el comando de copiar
                if (successful) {
                    alert('URL copiada al portapapeles');
                } else {
                    alert('Hubo un error al copiar al portapapeles');
                }
            } catch (err) {
                console.error('Error al copiar al portapapeles:', err);
                alert('Hubo un error al copiar al portapapeles');
            }

            document.body.removeChild(textArea);  // Remueve el textarea del DOM
        }
    };

    const url = `${import.meta.env.VITE_APP_URL}/users/${userId}`

    return <div className='QRContainer'>
        < QRCode
            className='QR'
            value={url}
            size={256}
            bgColor='#ffffff'
            fgColor='#000000'
        />
        <Text>Ask to your teacher to scan this code or share the URL!</Text>
        <Button className='QRButton' onClick={copyToClipboard}>Copy URL</Button>
        <Button className='QRButton'><Link to='/'>Go Home</Link></Button>
    </div>
}

export default ShareQR