import axios from "axios";

const createProductAction = (data, photo) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append("product_name", data.product_name);
        formData.append("product_stock", data.product_stock);
        formData.append("product_price", data.product_price);
        formData.append("category_id", data.category_id);
        formData.append("product_image", photo);
        formData.append("product_description", data.product_description);
        const products = axios.post(`${process.env.REACT_APP_API_URL}/products`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })

        const result = (await products).data.data
        console.log(result)
        alert("Product created!");
        window.location.reload();
        dispatch({ type: "create_product", payload: result })
    } catch (error) {
        console.log(error)
        alert("Error to create product");
    }
}

export default createProductAction;