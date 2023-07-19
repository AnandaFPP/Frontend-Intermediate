import axios from "axios";

const createProductAction = (data, photo) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("stock", data.stock);
        formData.append("price", data.price);
        formData.append("photo", photo);
        formData.append("description", data.description);
        const products = axios.post("http://localhost:8000/products", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })

        const result = (await products).data.data
        alert("Product created!");
        window.location.reload();
        dispatch({ type: "create_product", payload: result })
    } catch (error) {
        console.log(error)
        alert("Error to create product");
    }
}

export default createProductAction;