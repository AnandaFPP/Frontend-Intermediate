import axios from "axios";

const updateProductAction = (data, id, image, setShow) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append("product_name", data.product_name);
        formData.append("product_stock", data.product_stock);
        formData.append("product_price", data.product_price);
        formData.append("product_image", image);
        formData.append("product_description", data.product_description);
        const products = axios.put(`${process.env.REACT_APP_API_URL}/products/${id}`, formData, {
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