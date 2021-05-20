import React, { Component} from 'react'



export default class Table extends Component{
    series(){
        let item = []
        item.push([this.props.data.name],[this.props.data.age])
        return(item)
    }
    render(){
        const listItems = this.props.data.name.map((name, id) =>
        <tr key={id}>
            <td key={id}>{name}</td>
            <td key={id+1}>{this.props.data.age[id]}</td>
            <td key={id+2}>{this.props.data.sex[id]}</td>
            <td key={id+3}>{this.props.data.petKind[id]}</td>
            <td key={id+4}>{this.props.data.service[id]}</td>
            </tr>
        );
        return(
            <table>
            <thead>
              <tr>
                <th>name</th>
                <th>age</th>
                <th>sexo</th>
                <th>tipo</th>
                <th>servicio</th>
              </tr>
            </thead>
            <tbody>
              {listItems}
            </tbody>
          </table>
        )}

}