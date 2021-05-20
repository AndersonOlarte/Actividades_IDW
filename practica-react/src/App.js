import React, {Component} from 'react'
import Form from './components/Form'
import './App.css'
import Title from './components/Title'

export default class HelloWorld extends Component {
    render(){
        return(
            <>
            <Title/>
                <Form serie ={[]}/>
            </>
        )
    }
}