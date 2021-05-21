import React, { Component} from 'react'
import Table from './Table'

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: [],
            age: [],
            sex: [],
            petKind:[],
            service: []
        }
        this.handleSubmit =this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        const inputFields = Array.prototype.slice.call(document.getElementsByClassName("inputField"))
        let aux = [[],[],[],[],[]]
        let control = true
        for(const index in inputFields){
            if(inputFields[index].value ==="")
            {alert("hay algún campo del formulario sin rellenar")
            control = false
            break
            }
        }
        if(control){
            for(const index in inputFields){
            aux[index] = Object.values(this.state)[index]
            aux[index].push(inputFields[index].value)
            inputFields[index].value = ""
            }
            this.setState({
                name:aux[0],
                age: aux[1],
                sex: aux[2],
                petKind: aux[3],
                service: aux[4],
            })
        }
    }
    render(){
        return(
            <div className="container">
            <form className="form">
                  <h2>Formulario</h2>
                <label>Nombre</label>
                <input className="inputField" type="text" name="name" id="name"/>
                <label>Edad</label>
                <input className="inputField" type="number" id="age"/>
                <label>Sexo</label>
                <select className="inputField" id="sex">
                    <option>Macho </option>
                    <option>Hembra </option>
                </select>
                <label>Tipo de mascota</label>
                <select className="inputField" id="petKind">
                    <option>Perro </option>
                    <option>Gato </option>
                    <option>Hamster </option>
                    <option>Ave </option>
                </select>
                <label>servicio</label>
                <select className="inputField" id="service">
                    <option>Valoración </option>
                    <option>Urgencias </option>
                    <option>Hospitalización </option>
                </select>
                <input type="button" value ="aceptar" onClick={this.handleSubmit} className="button"/>
            </form>
            <div className="table">
                <h2>Tabla de registro</h2>
                <Table data = {this.state}/>
            </div>
            </div>
        )
    }
}