// import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import '../styles/Catalogo.css'

const Contacto = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData =>({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className='contactanos'>
            <div className='datos'>
                <h2> Contacto Rápipdo </h2>
                <p className='consulta'>Si tenés alguna consulta que necesite ser resuelta, contactate con nosotros a través del siguiente formulario:</p>
                <form action='/contacto' method='post' onSubmit={handleSubmit} className='formulario'>
                    <p>
                        <label for='nombre'>Nombre</label>
                        <input className='input' type='text' name='nombre' value={formData.nombre} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for='email'>Email</label>
                        <input className='input' type='text' name='email' value={formData.email} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for='telefono'>Telefono</label>
                        <input className='input' type='text' name='telefono'value={formData.telefono} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for='mensaje'>Mensaje</label>
                        <textarea type='text' name='mensaje'value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p className= 'acciones'><input type='submit' value='Enviar'/></p>
                    {sending ? <p>Enviando...</p>: null}
                    {msg ? <p>{msg}</p>: null}
                </form>
            </div>
            <div className='datos2'>
                <h2>Otras vías de comunicación</h2>
                <p>Recuerda que también puedes contactarte con nosotros usando los medios de comunicación que encontrarás al pié de la pàgina</p>
                <img src="img/flecha.png" alt="flecha" className='flecha' />
            </div>
        </main>
    );
}
export default Contacto;