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
        const inputName = document.getElementById("name")
        const inputAge = document.getElementById("age")
        const inputSex = document.getElementById("sex")
        const inputPetKind = document.getElementById("petKind")
        const inputService = document.getElementById("service")
        const auxName = this.state.name
        const auxAge = this.state.age
        const auxSex = this.state.sex
        const auxPetKind = this.state.petKind
        const auxService = this.state.service
        if(inputName.value ==="" || inputAge.value==="" || inputSex.value ==="" || inputPetKind.value === "" || inputService.value === ""){
            alert("hay algún campo del formulario sin rellenar")
        }
        else{
            auxName.push(inputName.value)
            auxAge.push(inputAge.value)
            auxSex.push(inputSex.value)
            auxPetKind.push(inputPetKind.value)
            auxService.push(inputService.value)
            this.setState({
                name:auxName,
                age: auxAge,
                sex: auxSex,
                petKind: auxPetKind,
                service: auxService,
            })
            inputName.value = ""
            inputAge.value = ""
            inputSex.value = ""
            inputPetKind.value = ""
            inputService.value = ""
        }
    }
    render(){
        return(
            <div className="container">
            <form className="form">
                  <h2>Formulario</h2>
                <label>Nombre</label>
                <input type="text" name="name" id="name"/>
                <label>Edad</label>
                <input type="text" id="age"/>
                <label>Sexo</label>
                <select id="sex">
                    <option>Macho </option>
                    <option>Hembra </option>
                </select>
                <label>Tipo de mascota</label>
                <select id="petKind">
                    <option>perro </option>
                    <option>gato </option>
                    <option>Hamster </option>
                    <option>Ave </option>
                </select>
                <label>servicio</label>
                <select id="service">
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