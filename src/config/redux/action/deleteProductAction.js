import axios from "axios"


const deleteProductAction = (id, setShow) => async (dispatch) => {
    try {
        const products = await axios.delete(`http://localhost:8000/products/${id}`)

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