export const importantPost = () => {
    return {
        type: 'IMPORTANT_POST'
    }
}

export const addToForm = (newPost) => {
    return {
        type: 'ADD_TO_FORM',
        payload: newPost
    }
}
export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        payload: id
    }
}
export const addImportantPost = (id) => {
    return {
        type: 'ADD_IMPORTANT_POST',
        payload: id
    }
}
export const addUrgentPost = (id) => {
    return {
        type: 'ADD_URGENT_POST',
        payload: id
    }
}
export const toComplete = (id) => {
    return {
        type: 'TO_COMPLETE',
        payload: id
    }
}
export const searchPost = (newSearch) => {
    return {
        type: 'SEARCH_POST',
        payload: newSearch
    }
}
export const filtered = (term) => {
    return {
        type: 'FILTERED',
        payload: term
    }
}
