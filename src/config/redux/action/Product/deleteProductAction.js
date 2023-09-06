import axios from "axios"


const deleteProductAction = (id, setShow) => async (dispatch) => {
    try {
        const products = await axios.delete(`${process.env.REACT_APP_API_URL}/products/${id}`)

        const result = products.data.data
        alert("Product deleted successfuly!");
        setShow(false);
        window.location.reload();
        dispatch({ type: "delete_product", payload: result })
    } catch (error) {
        console.log(error)
        alert("Delete product failed!")
        setShow(false)
    }
}

export default deleteProductAction;