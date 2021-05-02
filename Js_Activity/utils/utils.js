'use strict'
import {createElement} from './createElement.js'

export function searchData(url, searchValue, parentId){
    fetch(url)
    .then(response => response.json())
    .then(receive => Object.values(receive['phrases']))
    .then(datos => {addData(datos, searchValue, parentId)})
    .catch(err =>console.log(err.message))
}


export function addData(data, searchValue, parentId){
        let parent = document.getElementById(parentId)
        var count = 0
        for (const key in data){
            let listElement = String(Object.values(data[key]))
            let child = createElement('li', {}, [])
            let flag = true
            for (let index = 0; index < searchValue.length; index++) {
                if(listElement[index].toLowerCase() != searchValue[index].toLowerCase()){
                    flag = false
                    break
                }
            }
            if (flag == false) {continue}
            child.appendChild(document.createTextNode(listElement))
            parent.appendChild(child)
            count +=1
        }
        if(count == 0 && searchValue.length > 0){
            let child = createElement('p', {}, [])
            child.appendChild(document.createTextNode('no hay ningún elemento que coincida con el críterio de busqueda'))
            parent.appendChild(child)
        }
}

export function deleteContent(htmlElementID){
    let element = document.getElementById(htmlElementID)
    element.innerHTML = ''
}