const initialState = {
    category: [],
    categoryDetail: []
}


const categoryReducer = (state = initialState, action) => {
    if (action.type === "get_all_category") {
        return {
            ...state,
            category: action.payload,
        }
    } else if (action.type === "get_detail_category") {
        return {
            ...state,
            categoryDetail: action.payload,
        }
    } else if (action.type === "create_category") {
        return state
    } else if (action.type === "update_category") {
        return state
    } else if (action.type === "delete_category") {
        return state
    } else {
        return state
    }
}

export default categoryReducer;