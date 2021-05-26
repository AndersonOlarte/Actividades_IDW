'use strict'
import {createElement} from '../utils/createElement.js'
import {searchData, deleteContent} from '../utils/utils.js'

export default function searchBar(url, paragraphId){
    const search = createElement('input', {type: 'text'},[])
    search.addEventListener('keyup', function(e){
        if (e.code == 'Enter'){
            deleteContent(paragraphId)
            searchData(url,search.value, paragraphId)
        }
    })
    return search
}