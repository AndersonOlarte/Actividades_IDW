'use strict'

import {createElement, addChild } from './utils/createElement.js'
import searchBar from './components/searchBar_component.js'
import createButton from './components/button_component.js'
import { searchData } from './utils/utils.js'

// version that works
const url = 'https://idwapi-juvasquez88.vercel.app/js'
const title = createElement('h1', {}, ['welcome Javascript'])
const title_div = createElement('div',{class: 'title'},[title] )
const paragraph = createElement('ul', {id: 'par'}, []);
searchData(url, '', paragraph.id)
const search = searchBar(url, paragraph.id)
const button = createButton(url,search, paragraph.id);
const main = document.getElementById('main')
addChild(main, [title_div,search, button, paragraph])




// search.addEventListener('keyup', function(e){
//     if (e.code == 'Enter'){
//         deleteElements()
//         searchData()
//     }
// })
// main.appendChild(paragraph)

// function addData(data){
//     for (const key in data){
//         let match = search.value
//         let listElement = String(Object.values(data[key]))
//         let child = document.createElement('p')
//         let flag = true
//         for (let index = 0; index < match.length; index++) {
//             if (listElement[index].toLowerCase() != match[index].toLowerCase()) {
//                 flag = false
//                 break
//             }
//         }
//         if (flag == false) {continue}
//         child.appendChild(document.createTextNode(listElement))
//         paragraph.appendChild(child)
//     }
// }
// function searchData(){
//     fetch('https://idwapi-juvasquez88.vercel.app/js')
//     .then(response =>response.json())
//     .then(receive => Object.values(receive['phrases']))
//     .then(datos => {addData(datos)}) }

// function deleteElements() {
//     paragraph.innerHTML = ''
// }






// // version que funciona
// var search = document.createElement('input')
// search.setAttribute('type','text')
// var main = document.getElementById('main')
// var paragraph = document.createElement('p')
// paragraph.setAttribute('id', 'par')
// main.appendChild(search)
// var button = document.createElement('button')
// button.setAttribute('id','button')
// button.appendChild(document.createTextNode('buscar'))
// main.appendChild(button)
// button.addEventListener('click', function () {
//     deleteElements()
//     searchData()
// })
// search.addEventListener('keyup', function(e){
//     if (e.code == 'Enter'){
//         deleteElements()
//         searchData()
//     }
// })
// main.appendChild(paragraph)

// function addData(data){
//     for (const key in data){
//         let match = search.value
//         let listElement = String(Object.values(data[key]))
//         let child = document.createElement('p')
//         let flag = true
//         for (let index = 0; index < match.length; index++) {
//             if (listElement[index].toLowerCase() != match[index].toLowerCase()) {
//                 flag = false
//                 break
//             }
//         }
//         if (flag == false) {continue}
//         child.appendChild(document.createTextNode(listElement))
//         paragraph.appendChild(child)
//     }
// }
// function searchData(){
//     fetch('https://idwapi-juvasquez88.vercel.app/js')
//     .then(response =>response.json())
//     .then(receive => Object.values(receive['phrases']))
//     .then(datos => {addData(datos)}) }

// function deleteElements() {
//     paragraph.innerHTML = ''
// }







// códigos fallidos

// document.body.load = webPage()
// function webPage(){
//     searchData()
// }

// function searchValue(){
//     console.log('hola mundo')
// }
// function createParagraph(data){
//     let tagName = 'input'
//     let properties = {type: 'text', id: 'searchBar', value:"Escribe algo"}
//     let search = document.createElement(tagName)
//     search.setAttribute('type','text')
//     search.setAttribute('id','searchBar')
//     search.setAttribute('value','Type something')
//     let main = document.getElementById('main')
//     let d = document.createElement('p')
//     main.appendChild(search)
//     main.appendChild(d)
//     tagName = 'button'
//     let button = document.createElement(tagName)
//     button.setAttribute('id', 'button')
//     button.setAttribute('onclick', 'searchValue()')
//     button.appendChild(document.createTextNode('buscar'))
//     main.appendChild(button)
//     tagName = 'p'









//     for (const key in data){
//         let paragraph = document.createElement(tagName)
//         let child = Object.values(data[key])
//         paragraph.appendChild(document.createTextNode(child))
//         main.appendChild(paragraph)
//     }
// }
// function searchData(){
//     fetch('https://idwapi-juvasquez88.vercel.app/js')
//     .then(response =>response.json())
//     .then(receive => Object.values(receive['phrases']))
//     .then(datos => {
//         createParagraph(datos)
//     })

// }

// document.body.load = composeWeb(searchField, searchIcon)

// function composeWeb(field, icon){
//     let main = document.getElementById('main');
//     main.appendChild(field)
//     main.appendChild(icon)
// }

// function searchField() {
//     let tagName = 'input'
//     let properties = {type:'text', name:'searchField', placeholder:'Search'}
//     return document.createElement(tagName, properties)
// }

// function searchIcon(){
//     let tagName = 'img'
//     let properties = {src:'Js_Activity\\loupe.png', alt:'SearchImg'}
//     return document.createElement(tagName, properties)
// }


//  document.body.load = addElement();
//  function addElement(tagName){
//      let paragraph = document.createElement('p');
//      let hello = document.createTextNode('hello word from JavaScript')
//      paragraph.appendChild(hello)
//      let main = document.getElementById('main')
//      main.appendChild(paragraph)
//  }