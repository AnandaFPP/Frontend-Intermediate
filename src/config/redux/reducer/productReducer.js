const initialState = {
    product: [],
    productDetail: []
}


const productReducer = (state = initialState, action) => {
    if (action.type === "get_all_product") {
        return {
            ...state,
            product: action.payload,
        }
    } else if (action.type === "get_detail_product") {
        return {
            ...state,
            productDetail: action.payload,
        }
    } else if (action.type === "create_product") {
        return state
    } else if (action.type === "update_product") {
        return state
    } else if (action.type === "delete_product") {
        return state
    } else {
        return state
    }
}

export default productReducer;