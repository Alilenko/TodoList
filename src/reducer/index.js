const initialState = {
    data: [
        {body: 'First post', id: 1, important: false, urgent: false, completed: false},
        {body: 'it is a greeting', id: 2, important: true, urgent: false, completed: false}
    ],
    search: '',
    filterPost: [],
    filter: 'all',
    filterArr: []

}
const reducer = (state = initialState, action) => {

    switch(action.type){
        case 'ADD_TO_FORM':
            const newPost = action.payload;
            return {
                ...state,
                data: [
                    ...state.data,
                    newPost
                ]
            }
        case 'DELETE_POST':
            const id = action.payload;
            const itemIndex = state.data.findIndex(item => item.id === id)
            return {
                ...state,
                data: [
                    ...state.data.slice(0, itemIndex),
                    ...state.data.slice(itemIndex + 1)
                ]
            }
        case 'ADD_IMPORTANT_POST':
            const idx = action.payload;
            const itemImportant = state.data.findIndex(item => item.id === idx)
            const old = state.data[itemImportant]
            const newImportant = {...old, important: !old.important};
            const newArr = [
                ...state.data.slice(0, itemImportant), newImportant, ...state.data.slice(itemImportant + 1)
            ]
            return {
                ...state,
                data: newArr
            }
        case 'ADD_URGENT_POST':
            const inx = action.payload;
            const itemUrgent = state.data.findIndex(item => item.id === inx)
            const oldItem = state.data[itemUrgent]
            const newUrgent = {...oldItem, urgent: !oldItem.urgent};
            const newArray = [
                ...state.data.slice(0, itemUrgent), newUrgent, ...state.data.slice(itemUrgent + 1)
            ]
            return {
                ...state,
                data: newArray
            }
        case 'TO_COMPLETE':
            const idc = action.payload;
            const itemCompleted = state.data.findIndex(item => item.id === idc)
            const oldCompleted = state.data[itemCompleted]
            const newCompleted = {...oldCompleted, completed: !oldCompleted.completed};
            const newArrayCompleted = [
                ...state.data.slice(0, itemCompleted), newCompleted, ...state.data.slice(itemCompleted + 1)
            ]
            return {
                ...state,
                data: newArrayCompleted
            }
        case 'SEARCH_POST':
            const filter = [...state.data].filter(item => item.body.toLowerCase().includes(state.search.toLowerCase()))
            return {
                ...state,
                search: action.payload,
                filterPost: filter,
                filter: 'all'
            }
        case 'FILTERED':
            const filtr = action.payload;
            let term 
            if(action.payload === 'all'){
                term = state.data;
            }
            if(filtr === 'important'){
                term = state.data.filter(item => item.important);
            }
            if(filtr === 'urgent'){
                term = state.data.filter(item => item.urgent);
            }

            return {
                ...state,
                filter: action.payload,
                filterArr: term,
                
            }  
        default: return state
    }
}

export default reducer;