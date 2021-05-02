import {createElement} from '../utils/createElement.js'
import {searchData, deleteContent} from '../utils/utils.js'

export default function createButton(url,search, parentId){
    let button = createElement('button', {}, ['buscar'])
    button.addEventListener('click', function () {
        deleteContent(parentId)
        searchData(url,search.value, parentId)
    })
    return button
}