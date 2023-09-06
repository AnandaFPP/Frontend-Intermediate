import axios from "axios"


const getProductAction = () => async (dispatch) => {
    try {
        const products = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
        const result = products.data.data
        dispatch({ type: "get_all_product", payload: result })
    } catch (error) {
        console.log(error);
    }
}

export default getProductAction