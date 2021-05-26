import React, {Fragment, useState} from 'react';

const Formulario = () => {


    const [datos, setDatos] = useState({
        nombre: '',
        Edad: '',
        Sex: '',
        Pet: '',
        Service: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.Edad)
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Edad" className="form-control" onChange={handleInputChange} name="Edad"></input>
                </div>
                <select type="text" placeholder="Sex" className="form-control" onChange={handleInputChange} name="Sex">
                    <option>Macho</option>
                    <option>Hembra</option>
                </select>
                <select type="text" placeholder="Pet" className="form-control" onChange={handleInputChange} name="Pet">
                    <option>Perro</option>
                    <option>Gato</option>
                    <option>Hamster</option>
                    <option>Ave</option>
                </select>
                <select type="text" placeholder="Service" className="form-control" onChange={handleInputChange} name="Service">
                      <option>Valoración</option>
                      <option>Urgencias</option>
                      <option>Hospitalización</option>
                </select>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <ul>
                <li>{datos.nombre}</li>
                <li>{datos.Edad}</li>
                <li>{datos.Sex}</li>
                <li>{datos.Pet}</li>
                <li>{datos.Service}</li>
            </ul>
        </Fragment>
    );
}

export default Formulario;