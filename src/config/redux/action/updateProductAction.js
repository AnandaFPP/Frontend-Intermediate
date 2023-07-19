import axios from "axios";

const updateProductAction = (data, id, photo, setShow) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("stock", data.stock);
        formData.append("price", data.price);
        formData.append("photo", photo);
        formData.append("description", data.description);
        const products = axios.put(`http://localhost:8000/products/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })

        const result = (await products).data.data
        alert("Product updated!");
        setShow(false);
        window.location.reload();
        dispatch({ type: "update_product", payload: result })
    } catch (error) {
        alert(error);
        setShow(false);
    }
}

export default updateProductAction;