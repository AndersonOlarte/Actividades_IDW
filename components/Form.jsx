import React, {Component} from 'react'

export default class Form extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    state ={
        name: "",
        age: "",
        sex: "",
        service:"",
        petKind:""

    }
    handleSubmit(e){
        const inputs = document.getElementsByClassName('inputField')
        let control = true
        for (const field in inputs){
            console.log(field.value)
            // if(!field.value ){
            //     alert("los campos no están completos")
            //     control = false
            //     break
            // }
        }
        if (control) alert("exito!")
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <label>nombre</label>
                <input onChange={this.handleChange} name =""id="name" type="text" className="inputField" ></input>
                <input type="submit"/>
                {/* <label>edad</label>
                <input id="age" type="input" className="inputField"></input>
                <label>sexo</label>
                <select id="sex">
                    <option>macho</option>
                    <option>hembra</option>
                </select>
                <label>tipo de mascota</label>
                <select id="petKind">
                    <option>perro</option>
                    <option>gato</option>
                    <option>hamster</option>
                    <option>ave</option>
                </select>
                <label>servicio</label>
                <select id="service">
                    <option>valoración</option>
                    <option>urgencias</option>
                    <option>hospitalización</option>
                </select> */}
            </form>
            </>
        )
    }
}